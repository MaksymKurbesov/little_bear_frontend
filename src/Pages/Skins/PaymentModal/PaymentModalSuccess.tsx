import styles from "./PaymentModal.module.css";

const PaymentModalSuccess = ({ setPopupType }) => {
  return (
    <div className={styles["payment-modal"]}>
      <div className={styles["payment-modal-content"]}>
        <h2>Congratulations!</h2>
        <p>
          Your purchase of the bear skin was successful! 🧸✨ <br />
          <br />
          Now you can choose a skin that makes your bear look even cooler and
          brighter! <br />
          <br />
          To start using the new skin, simply select it in the "Bears" section.
        </p>
        <p>Enjoy and have a great game! 🕹️💥</p>
        <button
          onClick={() => setPopupType("")}
          className={styles["close-button"]}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentModalSuccess;
