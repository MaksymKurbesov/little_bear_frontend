import styles from "./PaymentModal.module.css";

const PaymentModalCanceled = ({ setPopupType }) => {
  return (
    <div className={styles["payment-modal"]}>
      <div className={styles["payment-modal-content"]}>
        Транзакция отменена
        <button
          onClick={() => setPopupType("")}
          className={styles["close-button"]}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default PaymentModalCanceled;
