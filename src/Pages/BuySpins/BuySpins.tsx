import styles from "./BuySpins.module.css";
import FortuneWheelButton from "/fortune-wheel-button.png";
import { useState } from "react";
import { useAppState } from "../../Stores/AppStateContext.tsx";
import CartShopping from "../../icons/cart-shopping-solid.svg";

const SPIN_PRICE = 10;

const BuySpins = () => {
  const [quantity, setQuantity] = useState(1);
  const { state } = useAppState();

  if (!state.user) return;

  return (
    <div className={styles["buy-spins"]}>
      <h1>Buy spins</h1>
      <form
        action="https://apate-backend.com/create-checkout-session"
        method="POST"
        className={styles["buy-spins-form"]}
      >
        <div className={styles["order-item"]}>
          <img src={FortuneWheelButton} alt={""} width={80} />
          <div className={styles["order-item-text"]}>
            <h2>Spins for fortune wheel</h2>
            <p>${SPIN_PRICE.toFixed(2)} each</p>
          </div>

          <div className={styles["quantity"]}>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (quantity <= 1) return;
                setQuantity((prev) => prev - 1);
              }}
            >
              -
            </button>
            <input
              value={quantity}
              name={"quantity"}
              id={"quantity"}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setQuantity((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <p className={styles["total-price"]}>
          Total: ${(quantity * SPIN_PRICE).toFixed(2)}
        </p>
        <input
          type={"text"}
          hidden
          value={state.user.id}
          id={"userID"}
          name={"userID"}
          readOnly
        />
        <button className={styles["buy-spin-button"]}>
          <img src={CartShopping} alt={""} width={15} />
          <span>Buy spins</span>
        </button>
      </form>
    </div>
  );
};

export default BuySpins;
