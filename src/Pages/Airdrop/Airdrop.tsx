import styles from "./Airdrop.module.css";
import BearCoin from "../../images/default-coin.webp";
import OrangeBearCoin from "../../images/orange-coin.webp";
import AirdropLogo from "../../images/airdrop-logo.webp";
import { useImagePreloader } from "../../hooks/useImagePreloader.ts";
import LoadSpinning from "../../SharedUI/LoadSpinning/LoadSpinning.tsx";
import BackgroundImage from "/airdrop-bg.webp";
import useCountdown from "../../hooks/useCountdown.ts";

const imageUrls = [BackgroundImage, BearCoin, OrangeBearCoin, AirdropLogo];

const Airdrop = () => {
  const imagesLoaded = useImagePreloader(imageUrls);
  const targetDate = "2024-10-06T23:59:59Z";

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (!imagesLoaded) {
    return (
      <div className={"suspense"}>
        <LoadSpinning />
      </div>
    );
  }

  return (
    <div className={`${styles.airdrop} main`}>
      <img
        className={styles["airdrop-logo"]}
        src={AirdropLogo}
        alt={""}
        // width={250}
      />
      <div className={styles["coin"]}>
        <img
          className={styles["orange-bear-icon"]}
          src={OrangeBearCoin}
          alt={""}
          width={"100%"}
        />
        <img
          className={styles["bear-icon"]}
          src={BearCoin}
          alt={""}
          width={"100%"}
        />
      </div>
      <div className={styles["countdown-wrapper"]}>
        <p>
          <span className={styles["soon"]}>SOON!</span>
        </p>
      </div>
    </div>
  );
};

export default Airdrop;
