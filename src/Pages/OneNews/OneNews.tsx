import styles from "./OneNews.module.css";
import { useLocation, useNavigate } from "react-router-dom";

import ArrowIcon from "../../icons/arrow.svg";
import { formatFirebaseTimestamp } from "../../utils/helpers.ts";

const OneNews = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { image, title, paragraphs, date } = location.state.currentNews;

  return (
    <div className={styles["one-news"]}>
      <button onClick={() => navigate(-1)} className={styles["back-button"]}>
        <img src={ArrowIcon} width={25} alt={""} />
      </button>
      <img src={image} alt={""} />
      <h1>{title}</h1>
      {paragraphs.map((paragraph) => {
        return <p key={paragraph}>{paragraph}</p>;
      })}
      <span>{formatFirebaseTimestamp(date)}</span>
    </div>
  );
};

export default OneNews;
