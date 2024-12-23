import styles from "./LoadingScreen.module.css";
import LoadingScreenImage1 from "../../images/loading-screen.webp";
import LoadingScreenImage2 from "../../images/loading-screen2.webp";
import LoadingScreenImage3 from "../../images/loading-screen3.webp";
import { useImagePreloader } from "../../hooks/useImagePreloader.ts";
import { useEffect, useRef, useState } from "react";
import {
  randomIntFromInterval,
  simulateLoadingProgress,
} from "../../utils/helpers.ts";

const LOADING_SCREENS = [
  LoadingScreenImage1,
  LoadingScreenImage2,
  LoadingScreenImage3,
];

const randomImage = LOADING_SCREENS[randomIntFromInterval(0, 2)];
console.log(randomIntFromInterval(0, 2), "randomIntFromInterval(1, 3)");

const LoadingScreen = ({ setIsLoadingScreen }) => {
  const [progress, setProgress] = useState(0);
  const wrapperRef = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoadingScreen(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (mounted.current) {
      simulateLoadingProgress(setProgress);
    }
  }, []);

  console.log(randomIntFromInterval, "randomIntFromInterval");

  return (
    <div ref={wrapperRef} className={styles["loading-screen"]}>
      <img className={styles["loading-image"]} src={randomImage} alt={""} />
      <div className={styles["progress-bar"]}>
        <p className={styles["text"]}>Loading</p>
        <p className={styles["percent"]}>{progress}%</p>
        <span style={{ width: `${progress}%` }}></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
