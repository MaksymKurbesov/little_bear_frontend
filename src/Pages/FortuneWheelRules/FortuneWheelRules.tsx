import styles from "./FortuneWheelRules.module.css";

const FortuneWheelRules = () => {
  return (
    <div className={styles["fortune-wheel-rules"]}>
      <div className={styles["overlay"]}></div>
      <div className={styles["content"]}>
        <h1>Краткие правила</h1>
        <p className={styles["subtitle"]}>
          Каждый месяц LittleBear проводит розыгрыш автомобилей и других ценных
          призов: гаджетов и ноутбуков!
        </p>
        <ul>
          <li>
            <span>Дата проведения</span>
            <br />
            <p>15.09.2024 - 15.10.2024</p>
          </li>
          <li>
            <span>Главный приз</span> <br />
            <ul className={styles["main-prizes"]}>
              <li>1. BMW 840i Cabrio</li>
              <li>2. Mercedes Benz GT Cabrio</li>
              <li>3. Macbook Pro - 25x</li>
              <li>4. Iphone 15 Pro Max - 25x</li>
              <li>5. Apple Vision Pro - 1x</li>
              <li></li>
            </ul>
          </li>
          <li>
            <span>Когда мы разыгрываем лотерею?</span> <br />
            <p>Розыгрыш состоится 15.10.2024</p>
          </li>
          <li>
            <span>Как принять участие?</span> <br />
            <ul className={styles["participate"]}>
              <li>
                1. Внести депозит в размере $10 или эквивалент в иностранной
                валюте
              </li>
              <li>
                2. Заходите в игру каждый день и получайте один билет LittleBear
                Lucky Dance
              </li>
              <li>
                3. В конце акции все собранные билеты участвуют в розыгрыше
                призов, которые будут разыграны случайным образом. больше
                билетов - больше шансов на победу!
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FortuneWheelRules;
