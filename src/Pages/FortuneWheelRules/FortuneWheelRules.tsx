import styles from "./FortuneWheelRules.module.css";
import ArrowIcon from "../../icons/arrow.svg";
import { useNavigate } from "react-router-dom";

const FortuneWheelRules = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["fortune-wheel-rules"]}>
      <div className={styles["overlay"]}></div>
      <button
        onClick={() => navigate("/fortune-wheel")}
        className={styles["back-button"]}
      >
        <img src={ArrowIcon} alt={""} />
      </button>
      <div className={styles["content"]}>
        <h1>Quiz Participation Terms</h1>
        <p className={styles["subtitle"]}>
          To participate in the draw, you need to:
        </p>
        <p className={styles["purchase-1-spin"]}>
          • Purchase 1 spin of the wheel of fortune or buy a character available
          in the skins shop.
        </p>
        <ul className={styles["prizes-list"]}>
          <li>
            <span>Prizes to be awarded:</span> <br />
            <ul className={styles["main-prizes"]}>
              <li>1st place: Mercedes-Benz GT AMG</li>
              <li>2nd place: BMW M4</li>
              <li>3rd place: 10x iPhone 16 Pro Max</li>
              <li>4th place: 5x AirPods Pro</li>
              <li>5th place: “Mafia” characte</li>
              <li></li>
            </ul>
          </li>
          <li>
            <span className={styles["how-to-win"]}>How to win prizes:</span>{" "}
            <br />
            <span className={styles["on-the-wheel"]}>
              On the wheel, there are:
            </span>
            <ul className={styles["participate"]}>
              <li>• 2 golden tickets</li>
              <li>• 2 silver tickets</li>
              <li>• 1 Bearbrick “Mafia”</li>
              <li>• Bear tokens</li>
            </ul>
          </li>
        </ul>
        <p className={styles["to-win-car"]}>
          To win a car, you need to have the highest number of golden tickets.
          The iPhones will go to the 10 people with the most silver tickets. The
          same applies to the AirPods. To get the Bearbrick “Mafia” character,
          you simply need to land on it on the wheel, and it will automatically
          appear in your account.
        </p>
        <p className={styles["after-the-draw"]}>
          After the draw, the project managers will contact you for further
          arrangements. The “Bearbrick Mafia” character will remain in your skin
          gallery after the draw.
        </p>
      </div>
    </div>
  );
};

export default FortuneWheelRules;
