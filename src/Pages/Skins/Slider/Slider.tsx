import styles from "./Slider.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../../../icons/arrow.svg";
import { useAppState } from "../../../Stores/useAppState.ts";
import SkinSlide from "../SkinSlide/SkinSlide.tsx";
import { SKINS } from "../../../utils/consts.ts";
import LoadSpinning from "../../../SharedUI/LoadSpinning/LoadSpinning.tsx";
import { getLevelByPoints } from "../../../utils/helpers.ts";
import { userApi } from "../../../main.tsx";

const Slider = ({ currentSkin, setCurrentSkin, isImageLoaded }) => {
  const swiperRef = useRef(null);
  const { state, dispatch } = useAppState();
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [swiper, setSwiper] = useState<Swiper>();
  const [userCurrentLevel, setUserCurrentLevel] = useState(0);

  useEffect(() => {
    if (state.user) {
      setUserCurrentLevel(getLevelByPoints(state.user.points));
    }

    if (!swiper) return;

    if (swiper.activeIndex === 0) {
      setIsBeginning(true);
    }

    if (swiper.activeIndex === swiper.slides.length - 1) {
      setIsEnd(true);
    }

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachEnd", () => setIsEnd(true));
    swiper.on("reachBeginning", () => setIsBeginning(true));

    return () => {
      swiper.off("slideChange", handleSlideChange);
      swiper.off("reachEnd");
      swiper.off("reachBeginning");
    };
  }, [swiper, state.user]);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      initialSlide={userCurrentLevel}
      onSwiper={(swiper) => {
        setSwiper(swiper);
      }}
      onSlideChange={(e) => {
        setCurrentSkin(e.activeIndex);
      }}
    >
      {SKINS.map((skin, index) => {
        return (
          <SwiperSlide key={index}>
            <SkinSlide
              skin={skin}
              currentPoints={state.user!.points}
              level={userCurrentLevel}
              index={index}
              userSkinName={state.user.skin}
              onSelectHandler={() => {
                userApi.setUserSkin(state.user.id, skin.name);
              }}
            />
          </SwiperSlide>
        );
      })}
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        className={`${styles["arrow-prev"]} ${isBeginning ? styles["hidden"] : ""}`}
      >
        <img src={ArrowIcon} alt={""} width={50} />
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
        className={`${styles["arrow-next"]} ${isEnd ? styles["hidden"] : ""}`}
      >
        <img src={ArrowIcon} alt={""} width={50} />
      </button>
    </Swiper>
  );
};

export default Slider;
