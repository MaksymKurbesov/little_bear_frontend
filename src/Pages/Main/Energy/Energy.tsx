import styles from "./Energy.module.css";
import { useCallback, useEffect, useState } from "react";
import { useAppState } from "../../../Stores/AppStateContext.tsx";
import {
  doc,
  increment,
  onSnapshot,
  runTransaction,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../main.tsx";
import { lodashThrottle } from "../../../utils/lodash/lodashThrottle.ts";
import eventEmitter from "../../../utils/eventEmitter.ts";
import { useTelegram } from "../../../hooks/useTelegram.ts";

const Energy = () => {
  const maxEnergy = 1000;
  const recoveryRate = 1;
  const [energy, setEnergy] = useState(maxEnergy);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const energyPercentage = (energy / maxEnergy) * 100;
  const { state } = useAppState();

  const userDocRef = doc(db, "users", `${state.user.id}`);

  useEffect(() => {
    const handleLocalEnergy = () => {
      setEnergy((prev) => prev - 1);
    };

    const intervalId = setInterval(() => {
      setEnergy((prev) => {
        if (prev >= 1000) {
          clearInterval(intervalId); // Очищаем интервал, если значение больше или равно 100
          return prev;
        }
        return prev + 1;
      });
    }, 1000); // Интервал в 1000 мс (1 секунда)

    const unsubscribe = onSnapshot(userDocRef, async (docSnapshot) => {
      const currentTime = Date.now();

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();

        // Проверяем, есть ли поле 'energy' и 'lastUpdateTime'
        if (data.energy === undefined || data.lastUpdateTime === undefined) {
          // Инициализируем недостающие поля
          await updateDoc(userDocRef, {
            energy: maxEnergy,
            lastUpdateTime: currentTime,
          });

          console.log("this");
          setEnergy(maxEnergy);
          setLastUpdateTime(currentTime);
        } else {
          // Вычисляем восстановленную энергию
          const timeDiffInSeconds = Math.floor(
            (currentTime - lastUpdateTime) / 1000,
          );

          let recoveredEnergy = data.energy + timeDiffInSeconds * recoveryRate;
          if (recoveredEnergy > maxEnergy) recoveredEnergy = maxEnergy;

          setEnergy(recoveredEnergy);
          setLastUpdateTime(currentTime);

          // Обновляем энергию и время в Firestore
          // await updateDoc(userDocRef, {
          //   energy: recoveredEnergy,
          //   lastUpdateTime: currentTime,
          // });
        }
      } else {
        // Если документ не существует, создаем его
        // await setDoc(userDocRef, {
        //   energy: maxEnergy,
        //   lastUpdateTime: currentTime,
        //   // Добавьте другие поля, необходимые для вашего приложения
        // });
        setEnergy(maxEnergy);
        setLastUpdateTime(currentTime);
      }
    });

    eventEmitter.on("localEnergy", handleLocalEnergy);

    return () => {
      clearInterval(intervalId);
      eventEmitter.off("localEnergy", handleLocalEnergy);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleExternalClick = async () => {
      if (energy > 0) {
        console.log("tapped");
        try {
          await runTransaction(db, async (transaction) => {
            const docSnapshot = await transaction.get(userDocRef);
            if (!docSnapshot.exists()) {
              throw "Документ не существует!";
            }

            // const currentEnergy = docSnapshot.data().energy;
            if (energy > 0) {
              const newEnergy = energy;
              const currentTime = Date.now();

              console.log(newEnergy, "newEnergy");

              // transaction.update(userDocRef, {
              //   energy: increment(-newEnergy),
              //   lastUpdateTime: currentTime,
              // });

              setEnergy(newEnergy);
              setLastUpdateTime(currentTime);
            } else {
              alert("Энергия закончилась!");
            }
          });
        } catch (error) {
          console.error("Ошибка транзакции: ", error);
        }
      } else {
        alert("Энергия закончилась!");
      }
    };

    // Подписываемся на событие 'externalClick'
    eventEmitter.on("externalClick", handleExternalClick);

    // Отписываемся при размонтировании компонента
    return () => {
      eventEmitter.off("externalClick", handleExternalClick);
    };
  }, [energy]);

  return (
    <div className={styles["energy"]}>
      <div style={{ backgroundColor: "#ccc", width: "100%", height: "20px" }}>
        <div
          style={{
            width: `${energyPercentage}%`,
            backgroundColor: "green",
            height: "100%",
          }}
        ></div>
      </div>
      <span>{energy} / 1000</span>
    </div>
  );
};

export default Energy;
