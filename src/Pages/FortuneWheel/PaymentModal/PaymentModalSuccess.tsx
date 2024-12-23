import styles from "./PaymentModal.module.css";

const PaymentModalSuccess = ({ setPopupType }) => {
  return (
    <div className={styles["payment-modal"]}>
      <div className={styles["payment-modal-content"]}>
        <h2>Congratulations!</h2>
        <p>
          You have successfully purchased your spin(s) for the Wheel of Fortune.
        </p>
        <p>Good luck in the draw! 🎉</p>
        <button
          onClick={() => {
            setPopupType("");
            document.body.style.overflow = "visible";
          }}
          className={styles["close-button"]}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentModalSuccess;
