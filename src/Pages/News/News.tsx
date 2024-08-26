import styles from "./News.module.css";
import NewsImage1 from "../../images/news1.webp";
import { NavLink } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../main.tsx";
import { formatFirebaseTimestamp } from "../../utils/helpers.ts";

export const NEWS = [
  {
    image: NewsImage1,
    title: "Выпущен новый мишка Lit при поддержке LitEnergy",
    paragraphs: [
      "Мы рады представить нового эксклюзивного мишку, который появится в нашем танцевальном приложении! Этот особенный мишка не только обладает уникальными танцевальными движениями, но и станет вашим пропуском в мир ярких и незабываемых вечеринок!",
      "Этот мишка доступен только через специальные ключи! Но внимание: ключи будут доступны только во второй фазе airdrop-а. Следите за новостями и не упустите свой шанс!",
      "Готовьтесь к невероятному танцевальному приключению вместе с нашим новым мишкой!",
    ],
    date: "20/08/24 15:42",
    link: "/news/lit-energy",
  },
  {
    image: NewsImage1,
    title: "Танцевальная революция продолжается!",
    paragraphs: [
      "Мы представляем уникального мишку с невероятными танцевальными движениями! Этот мишка доступен только для тех, кто соберет ключи, а они станут доступны во второй фазе airdrop-а. Это ваш шанс стать частью элитного клуба танцоров!",
      "Этот мишка доступен только через специальные ключи! Но внимание: ключи будут доступны только во второй фазе airdrop-а. Следите за новостями и не упустите свой шанс!",
      "Готовьтесь к невероятному танцевальному приключению вместе с нашим новым мишкой! ",
    ],
    date: "17/07/24 12:11",
    link: "/news/dance-revolution",
  },
  {
    image: NewsImage1,
    title: "Приготовьтесь к взрыву танцевальной энергии!",
    paragraphs: [
      "Встречайте эксклюзивного мишку, который будет доступен только тем, кто найдет ключи. Эти ключи станут доступны во второй фазе airdrop-а. Соберите их и добавьте в свою коллекцию самого редкого танцора!",
      "Этот мишка доступен только через специальные ключи! Но внимание: ключи будут доступны только во второй фазе airdrop-а. Следите за новостями и не упустите свой шанс!",
      "Готовьтесь к невероятному танцевальному приключению вместе с нашим новым мишкой! ",
    ],
    date: "30/04/24 18:42",
    link: "/news/dance-boom",
  },
];

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

  console.log(news, "news");

  return (
    <div className={styles["news"]}>
      <h1>Новости</h1>
      <ul className={styles["news-list"]}>
        {news.map((oneNews) => {
          return (
            <li key={oneNews.title}>
              <img src={oneNews.image} alt={""} />
              <h2>{oneNews.title}</h2>
              <p>{oneNews.paragraphs[0]}</p>
              <div className={styles["footer"]}>
                <span>{formatFirebaseTimestamp(oneNews.date)}</span>
                <NavLink to={oneNews.link}>Читать новость</NavLink>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default News;
