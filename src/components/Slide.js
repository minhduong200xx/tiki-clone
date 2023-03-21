import React, { useState } from "react";
import other from "../img/otherslide.webp";
import left from "../img/left.png";
import slide1 from "../img/slide1.webp";
import { Carousel } from "react-responsive-carousel";
import { slide } from "../utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
const Slide = () => {
  const [currentIndex, setCurrent] = useState(0);
  const delay = 4000;
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrent(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrent(newIndex);
  };
  const goToSlide = (index) => {
    setCurrent(index);
  };
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === slide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [currentIndex]);
  return (
    <div className="flex w-full justify-between rounded overflow-hidden gap-x-4">
      <div className="relative flex flex-wrap h-60 rounded-xl overflow-hidden basis-[75%] ">
        <div className="h-full w-full overflow-hidden">
          <div className="relative h-full overflow-hidden">
            <div>
              <a
                onClick={goToPrev}
                className="block cursor-pointer left-[10px] top-[50%] absolute -mt-4 opacity-30 z-[1] outline-none text-blue-500 hover:opacity-100"
              >
                <img
                  src={left}
                  alt=""
                  className="w-8 relative max-w-full overflow-clip cursor-pointer "
                />
              </a>

              <Swiper
                className="list"
                loop={true}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
              >
                <AnimatePresence>
                  <SwiperSlide
                    key={slide[currentIndex].id}
                    className="w- opacity-100 transform-gpu flex"
                  >
                    <div className="w-[722px] h-auto block ">
                      <a className="overflow-hidden outline-none bg-transparent text-blue-500">
                        <motion.img
                          initial={{ x: 300, opacity: 0.9 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -300, opacity: 0.9 }}
                          src={slide[currentIndex].url}
                          alt=""
                          className="w-full max-w-full object-contain overflow-clip ease"
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                </AnimatePresence>
              </Swiper>

              <a
                onClick={goToNext}
                className="block cursor-pointer right-[10px] top-[50%] absolute -mt-4 opacity-30 z-[1] outline-none text-blue-500 hover:opacity-100"
              >
                <img
                  src={left}
                  alt=""
                  className="w-8 relative max-w-full overflow-clip cursor-pointer rotate-180"
                />
              </a>
              <ul className="m-0 p-0 absolute bottom-[10px] justify-center flex w-full">
                {slide &&
                  slide.map((item, index) => (
                    <li
                      className="inline-block text-[0]"
                      key={item.id}
                      onClick={() => {
                        goToSlide(index);
                      }}
                    >
                      <button
                        className={
                          currentIndex === index
                            ? "bg-opacity-100 inline-block mx-[2px] my-0 w-6 h-[2px] cursor-pointer p-0 bg-white opacity-100"
                            : "bg-opacity-50 inline-block mx-[2px] my-0 w-6 h-[2px] cursor-pointer p-0 bg-white opacity-100"
                        }
                      ></button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap h-60 max-w-60 rounded-xl overflow-hidden basis-[25%]">
        <div className="w-full h-full block">
          <div>
            <a
              href="https://tiki.vn/khuyen-mai/duong-da-make-up-nhat-ban-senka-tsubaki?itm_campaign=HMP_YPD_TKA_BNA_UNK_ALL_ALL_UNK_UNK_UNK_TMSX.f86825f5-83fc-4f19-ad36-7dc61e7b3e28&itm_medium=CPD&itm_source=tiki-ads&tmsx=f86825f5-83fc-4f19-ad36-7dc61e7b3e28"
              className="text-blue-500 bg-transparent"
            >
              <img
                src={other}
                alt=""
                className="object-contain max-w-full overflow-clip"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
