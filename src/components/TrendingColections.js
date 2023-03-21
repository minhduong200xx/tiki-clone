import React, { useState } from "react";
import trend1 from "../img/trend1.webp";
import { trending } from "../utils/data";
const TrendingColections = () => {
  const [beginIndex, setBegin] = useState(0);
  const handlePrevNext = () => {
    if (beginIndex === 0) {
      setBegin(6);
    } else setBegin(0);
  };
  return (
    <div className="mt-4 py-3 px-4 bg-white rounded-lg min-h-[278px] ">
      <div className="mb-3 font-bold text-base text-black ">
        Bộ sưu tập nổi bật
      </div>
      <div className="relative h-full overflow-hidden">
        <a
          onClick={handlePrevNext}
          className="block left-0 cursor-pointer -translate-y-1/2 absolute top-1/2 -mt-4 opacity-30 z-[1] bg-transparent hover:opacity-100"
        >
          <span>
            <img
              alt=""
              src="https://salt.tikicdn.com/ts/upload/2c/33/d2/b342e7bbdea530fd36caaaf75b412781.png"
              className="w-[50px] h-[50px] overflow-clip max-w-full"
            />
          </span>
        </a>
        <div className="mr-[-6px] -ml-2 ">
          <div className="opacity-100 flex">
            {trending &&
              trending.slice(beginIndex, beginIndex + 6).map((item) => (
                <div className="w-40 py-0 px-2 h-auto">
                  <img
                    src={item.img}
                    alt=""
                    className="max-w-[145px] h-[215px] border border-solid border-gray-100 rounded-lg cursor-pointer overflow-hidden object-contain max-h-full "
                  />
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
              alt=""
              src="https://salt.tikicdn.com/ts/upload/2c/33/d2/b342e7bbdea530fd36caaaf75b412781.png"
              className="w-[50px] h-[50px] overflow-clip max-w-full"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default TrendingColections;
