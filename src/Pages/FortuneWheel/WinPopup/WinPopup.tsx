import styles from "./WinPopup.module.css";
import FortuneWheelButton from "/fortune-wheel-button.png";

const WinPopup = ({ name, closeHandler, isShow }) => {
  return (
    <div
      className={`${styles["winning-popup"]} ${isShow ? styles["showing"] : styles["notShowing"]}`}
    >
      <div
        className={`${styles["winning-popup-content"]} ${isShow ? styles["showingContent"] : styles["notShowing"]}`}
      >
        <img
          src={FortuneWheelButton}
          alt={""}
          className={styles["fortune-wheel-image"]}
        />
        <p className={styles["congratz"]}>
          Congratulations on winning <br /> {name}! 🎉
        </p>
        <p className={styles["luck-was"]}>
          Luck was on your side today, and you've scored big with{" "}
          <span>{name}</span>!
        </p>
        <p className={styles["enjoy-every"]}>
          Enjoy every bit of your reward – you truly earned it! Here’s to more
          lucky wins and exciting moments ahead!
        </p>
      </div>
      <button
        className={`${styles["get-reward"]}  ${isShow ? styles["showingContent"] : styles["notShowing"]}`}
        onClick={closeHandler}
      >
        Get reward
      </button>
    </div>
  );
};

export default WinPopup;
