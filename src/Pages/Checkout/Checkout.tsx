import styles from "./Checkout.module.css";
import FortuneWheelButton from "/fortune-wheel-button.png";
import CartShopping from "../../icons/cart-shopping-solid.svg";
import { useState } from "react";
import { useAppState } from "../../Stores/useAppState.ts";
import { useLocation } from "react-router-dom";
import MickeyCohenImage from "../../images/skins/mickey.png";

const SKINS_NAME_MAP = {
  mickey: "Mickey Cohen",
};

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const { state } = useAppState();
  const location = useLocation();

  if (!state.user) return;

  return (
    <div className={styles["checkout"]}>
      <h1>Checkout</h1>
      <form
        action={`https://apate-backend.com/${location.state.stripeEndpoint}`}
        // action={`http://localhost:8000/${location.state.stripeEndpoint}`}
        method="POST"
        className={styles["buy-spins-form"]}
      >
        <div className={styles["order-item"]}>
          {location.state.name === "mickey" ? (
            <img src={MickeyCohenImage} alt={""} width={60} />
          ) : (
            <img src={FortuneWheelButton} alt={""} width={80} />
          )}
          <div className={styles["order-item-text"]}>
            <h2>
              {location.state.name === "mickey"
                ? "Mickey Cohen"
                : location.state.name}
            </h2>
            <p>${location.state.price.toFixed(2)} each</p>
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
          Total: ${(quantity * location.state.price).toFixed(2)}
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
          <span>BUY</span>
        </button>
      </form>
    </div>
  );
};

export default Checkout;
