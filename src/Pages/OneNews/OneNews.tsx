import styles from "./OneNews.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { NEWS } from "../News/News.tsx";
import ArrowIcon from "../../icons/arrow.svg";

const OneNews = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentNews = NEWS.filter((news) => news.link === location.pathname)[0];

  return (
    <div className={styles["one-news"]}>
      <button onClick={() => navigate(-1)} className={styles["back-button"]}>
        <img src={ArrowIcon} width={25} alt={""} />
      </button>
      <img src={currentNews.image} alt={""} />
      <h1>{currentNews.title}</h1>
      {currentNews.paragraphs.map((paragraph) => {
        return <p key={paragraph}>{paragraph}</p>;
      })}
      <span>{currentNews.date}</span>
    </div>
  );
};

export default OneNews;
