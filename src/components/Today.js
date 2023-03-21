import React, { useEffect, useRef, useState } from "react";
import today1 from "../img/today1.webp";
import { slide, today } from "../utils/data";
import { SmoothScrolling } from "../utils/function";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Swipe } from "swiper";
import { useSwiperSlide, SwiperSlide } from "swiper/react";

const Today = () => {
  const [beginIndex, setBegin] = useState(0);
  const handlePrevNext = () => {
    if (beginIndex === 0) {
      setBegin(7);
    } else setBegin(0);
  };
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  const deadline = "March, 21, 2023, 15:00:00";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinute(Math.floor((time / 1000 / 60) % 60));
    setSecond(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mr-0 mt-4 py-3 px-4 bg-white rounded-lg overflow-hidden min-h-[242px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center justify-start cursor:pointer">
          <p className="m-0 mr-3 font-bold text-base text-black">
            Giá sốc hôm nay
          </p>
          <div className="cursor:pointer">
            <a href="#" className="bg-transparent">
              <div className="text-gray-500 flex text-[15px] items-center">
                <span className="text-15px font-medium my-0 mx-1 py-0 px-[3px] bg-red-500 rounded text-white hour">
                  {hour < 10 ? `0${hour}` : hour}
                </span>
                <b className="font-bold text-xl">:</b>
                <span className="text-15px font-medium my-0 mx-1 py-0 px-[3px] bg-red-500 rounded text-white minute">
                  {minute < 10 ? `0${minute}` : minute}
                </span>
                <b className="font-bold text-xl">:</b>
                <span className="text-15px font-medium my-0 mx-1 py-0 px-[3px] bg-red-500 rounded text-white second">
                  {second < 10 ? `0${second}` : second}
                </span>
              </div>
            </a>
          </div>
        </div>
        <div>
          <a
            href=""
            className="flex items-center font-medium text-sm text-blue-500"
          >
            Xem thêm
            <img
              src="https://salt.tikicdn.com/ts/upload/d8/38/d3/4bef23fec35f9fbfa1757d30184ddb9c.png"
              alt=""
              className="w-6 -mt-[1px] ml-2 overflow-clip"
            />
          </a>
        </div>
      </div>
      <div>
        <div className="relative h-full overflow-hidden">
          <div className="slider block  ">
            <a
              onClick={handlePrevNext}
              className="block left-0 cursor-pointer -translate-y-1/2 absolute top-1/2 -mt-4 opacity-30 z-[1] bg-transparent hover:opacity-100"
            >
              <img
                src="https://salt.tikicdn.com/ts/upload/2c/33/d2/b342e7bbdea530fd36caaaf75b412781.png"
                alt=""
                className="w-[50px] h-[50px] overflow-clip max-w-full relative"
              />
            </a>
            <div className="my-0 -mx-2 z-0 relative">
              <div className="opacity-100 flex">
                {today &&
                  today.slice(beginIndex, beginIndex + 7).map((item) => (
                    <div key={item.id} className="my-0 mx-2 w-[138px] h-auto">
                      <Link
                        to="/detail"
                        className="flex flex-col relative z-[1] text-blue-500 hover:opacity-95"
                      >
                        <div className="relative w-full">
                          <div className="relative w-full pb-[100%]">
                            <img
                              src={item.img}
                              alt=""
                              className="absolute w-full h-full object-contain overflow-clip"
                            />
                            <img
                              src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png"
                              alt=""
                              className="bottom-0 left-0 block absolute z-[2] max-w-full w-[91px] h-4 overflow-clip"
                            />
                            <span className="absolute top-1 left-1 p-[2px] bg-red-200 rounded text-red-500 font-bold text-xs">
                              -{item.discount}%
                            </span>
                          </div>
                          <div className="text-left text-base font-medium my-2 mx-0 flex items-center whitespace-nowrap text-red-500">
                            <span className="m-auto text-base">
                              {item.price}
                              <sup className="underlined -top-[0.5em]">đ</sup>
                            </span>
                          </div>
                          <div className="bg-red-200 rounded-[10px] relative flex w-full h-5">
                            <div
                              className={`absolute left-0 top-0 bg-red-500 h-5 rounded-[10px] w-[60%]`}
                            ></div>
                            <span className="text-[11px] py-0 px-0 pl-[6px] flex items-center justify-center h-full w-full absolute text-center text-white">
                              Đã bán {item.sold}
                            </span>
                            <img
                              src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                              alt=""
                              className="z-[10] absolute w-6 h-6 bottom-1 left-1"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            <a
              onClick={handlePrevNext}
              className="block right-0 cursor-pointer absolute -translate-y-1/2 top-1/2 -mt-4 opacity-30 z-[1] bg-transparent rotate-180 hover:opacity-100"
            >
              <span>
                <img
                  src="https://salt.tikicdn.com/ts/upload/2c/33/d2/b342e7bbdea530fd36caaaf75b412781.png"
                  className="w-[50px] h-[50px] overflow-clip max-w-full"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
