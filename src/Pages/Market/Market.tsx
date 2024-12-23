import styles from "./Market.module.css";
import ItemImage1 from "/market/1.png";
import ItemImage2 from "/market/2.png";

const ITEMS = [
  {
    image: ItemImage2,
    title: "Little Bear x Litvin",
    price: "5$",
  },
  {
    image: ItemImage1,
    title: "Little Bear x Mike Tyson",
    price: "5$",
  },
  {
    image: ItemImage2,
    title: "Little Bear x Voloshin",
    price: "5$",
  },
  {
    image: ItemImage1,
    title: "Litvin Energy Bear",
    price: "5$",
  },
  {
    image: ItemImage2,
    title: "Litvin Energy Bear",
    price: "5$",
  },
];

const Market = () => {
  return (
    <div className={styles["market"]}>
      <h1>Магазин</h1>
      <ul>
        {ITEMS.map((item, index) => {
          return (
            <li key={index}>
              <img src={item.image} alt={""} />
              <p className={styles["title"]}>{item.title}</p>
              <div className={styles["row"]}>
                <p className={styles["price"]}>
                  <span>Price</span>$5.00
                </p>
                <button className={styles["buy-button"]}>Buy</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Market;
