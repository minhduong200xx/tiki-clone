import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import sale1 from "../img/sale1.webp";
import sale2 from "../img/sale2.webp";
import sale3 from "../img/sale3.webp";
import { sale } from "../utils/data";
const Sale = () => {
  const [beginIndex, setBegin] = useState(0);
  const handlePrevNext = () => {
    if (beginIndex === 0) {
      setBegin(1);
    } else setBegin(0);
  };

  return (
    <div className="mt-4 py-3 px-4 bg-white rounded-lg min-h-[290px]">
      <div className="mb-3 font-bold text-base text-black flex items-center">
        Săn Sale Thương Hiệu
      </div>
      <div className="relative h-full overflow-hidden ">
        <a
          onClick={handlePrevNext}
          className="block left-0 cursor-pointer -translate-y-1/2 absolute top-1/2 -mt-[28px] opacity-30 z-[1] bg-transparent hover:opacity-100"
        >
          <span>
            <img
              alt=""
              src="https://salt.tikicdn.com/ts/upload/2c/33/d2/b342e7bbdea530fd36caaaf75b412781.png"
              className="w-[50px] h-[50px] overflow-clip max-w-full"
            />
          </span>
        </a>
        <AnimatePresence className="my-0 -mx-1">
          <div className="opacity-100 flex">
            {sale &&
              sale.slice(beginIndex, beginIndex + 3).map((item) => (
                <motion.div
                  initial={{ x: 300, opacity: 0.9 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0.9 }}
                  className="py-0 px-1 w-[318px] h-auto "
                >
                  <div className="gap-2 flex">
                    <div
                      className="w-full h-full max-w-[151px] max-h-[227px]"
                      key={item.id}
                    >
                      <img
                        src={item.img1}
                        alt=""
                        className="w-full h-full rounded-lg overflow-clip"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px] max-h-[227px] max-w-[151px]">
                      <div className="white-space-nowrap h-fit w-full">
                        <img
                          src={item.img2}
                          alt=""
                          className="w-[151px] h-auto rounded-lg object-contain overflow-clip "
                        />
                      </div>
                      <div className="white-space-nowrap h-fit w-full">
                        <img
                          src={item.img3}
                          className="w-[151px] h-auto rounded-lg object-contain overflow-clip"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </AnimatePresence>
        <a
          onClick={handlePrevNext}
          className="block right-0 cursor-pointer absolute -translate-y-1/2 top-1/2 -mt-[28px] opacity-30 z-[1] bg-transparent rotate-180 hover:opacity-100"
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
  );
};

export default Sale;
