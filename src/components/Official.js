import React from "react";
import off from "../img/official.png";
import official1 from "../img/official1.png";
import { official } from "../utils/data";
const Official = () => {
  return (
    <div className="mt-4 px-4 py-3 bg-gradient-to-br from-blue-200 to-white rounded-lg min-h-[280px]">
      <div className="mb-3 font-bold text-base text-black flex items-center">
        Thương Hiệu Chính Hãng{" "}
        <img
          src={off}
          alt=""
          className="ml-2 max-w-full w-[70px] h-4 overflow-clip"
        />
      </div>
      <div className="relative h-full overflow-hidden">
        <div className="slider">
          <div className="my-0 -mr-[6px] -ml-2">
            <div className="opacity-100 w-[960px] translate-x-0 flex">
              {official &&
                official.map((item) => (
                  <div className="w-40 py-0 px-2 h-auto">
                    <div className="inline-block w-full h-[217px] border border-solid border-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={item.url}
                        alt=""
                        className="min-w-[145px] max-w-[145px] overflow-clip"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Official;
