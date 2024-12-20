import styles from "./News.module.css";
import NewsImage1 from "../../images/news1.webp";
import { NavLink } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../main.tsx";
import {
  formatFirebaseTimestamp,
  sortByFirebaseTimestamp,
} from "../../utils/helpers.ts";

const News = () => {
  const [news, setNews] = useState([]);
  const storage = getStorage();

  useEffect(() => {
    const getNews = async (userId: string) => {
      try {
        const newsCollection = collection(db, "news");
        const newsDocs = await getDocs(newsCollection);

        newsDocs.docs.map((item) => {
          const imageRef = ref(storage, `/${item.data().image}`);
          console.log(item.data().date, "item.data().date");
          getDownloadURL(imageRef).then((url) => {
            const modifiedNews = {
              ...item.data(),
              image: url,
            };
            setNews((prevState) => [...prevState, modifiedNews]);
          });
        });
      } catch (error) {
        console.error("Error get user points: ", error);
      }
    };

    getNews();
  }, []);

  return (
    <div className={styles["news"]}>
      <h1>News</h1>
      <ul className={styles["news-list"]}>
        {sortByFirebaseTimestamp(news).map((oneNews) => {
          return (
            <li key={oneNews.title}>
              <img src={oneNews.image} alt={""} />
              <h2>{oneNews.title}</h2>
              <p>{oneNews.paragraphs[0]}</p>
              <div className={styles["footer"]}>
                <span>{formatFirebaseTimestamp(oneNews.date)}</span>
                <NavLink to={oneNews.link} state={{ currentNews: oneNews }}>
                  Read more
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default News;
