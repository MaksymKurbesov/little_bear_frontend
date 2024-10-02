import styles from "./LuckyDance.module.css";
import PromoImage from "/promo-image.webp";
import Ticket from "/ticket.webp";
import TicketShape from "/ticket-shape.svg";
import TicketShapeOrange from "/ticket-shape-filled.svg";
import TicketShapeWhite from "/ticket-shape-white.svg";
import { userApi } from "../../../main.tsx";
import { useAppState } from "../../../Stores/AppStateContext.tsx";
import { useEffect, useState } from "react";
import { TICKET_REWARDS } from "../../../utils/consts.ts";
import { NavLink } from "react-router-dom";

const LuckyDance = ({ promoIsOpen, closeHandler }) => {
  const { state, dispatch } = useAppState();
  const [consecutiveDays, setConsecutiveDays] = useState(0);
  const [isClaimedToday, setIsClaimedToday] = useState(false);

  useEffect(() => {
    const userID = state.user.id;

    const getConsecutiveDays = async () => {
      const days = await userApi.getConsecutiveClaimedDays(
        userID,
        "ticketRewards",
      );
      const isClaimed = await userApi.checkIfUserMissedToday(
        String(userID),
        "ticketRewards",
      );
      setConsecutiveDays(days);
      setIsClaimedToday(isClaimed);
    };

    getConsecutiveDays();
  }, []);

  // useEffect(() => {
  //   if (state.user) {
  //     userApi.checkTicketReward(state.user.id.toString(), dispatch);
  //   }
  // }, []);

  if (!state.user) return;

  return (
    <div
      className={`${styles["promo-background"]} ${promoIsOpen ? styles["promo-opened"] : ""}`}
    >
      <div className={styles["promo-content"]}>
        <div className={styles["header"]}>
          <img src={PromoImage} alt={""} width={"100%"} height={150} />
          <h1>
            Дарим BMW 840i Cabrio <br />
            Mersedes-Benz GT Cabrio
          </h1>
          <p className={styles["subtitle"]}>
            Каждый месяц LittleBear проводит розыгрыш автомобилей и других
            ценных призов! Каждый билет - это шанс выиграть.
          </p>
          <div className={styles["bottom-row"]}>
            <p className={styles["received"]}>
              <span>Получено</span> {consecutiveDays} из 30
            </p>
            <NavLink to={"/fortune-wheel-rules"}>Подробнее</NavLink>
          </div>
        </div>
        <ul className={styles["tickets-list"]}>
          {TICKET_REWARDS.map((item, index) => {
            const isActive = index < consecutiveDays;
            return (
              <li
                key={index}
                className={` ${isActive ? styles["active-day"] : ""}`}
              >
                <img
                  src={isActive ? TicketShapeOrange : TicketShape}
                  alt={""}
                />
                <div>
                  <p className={styles["day"]}>День {index + 1}</p>
                  <img src={item.icon} alt={""} width={25} />
                  <span className={styles["reward"]}>{item.reward} шт.</span>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className={`${styles["get-ticket"]} ${isClaimedToday ? styles["claimed-button"] : ""}`}
          onClick={async () => {
            await userApi.claimTicket(state.user, dispatch);
          }}
        >
          {isClaimedToday ? "Вы уже забрали билет" : "Забрать билет"}
        </button>
        <div onClick={closeHandler} className={styles["close-button"]}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LuckyDance;
