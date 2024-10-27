import styles from "./PaymentModal.module.css";

const PaymentModal = ({ message, setMessage }) => {
  return (
    <div className={styles["payment-modal"]}>
      {message}
      <button onClick={() => setMessage("")} className={styles["close-button"]}>
        Закрыть
      </button>
    </div>
  );
};

export default PaymentModal;
