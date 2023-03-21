import React from "react";
import { categories, hot } from "../utils/data";
import store from "../img/store.webp";
const Sidebar = () => {
  return (
    <div>
      <div className="relative flex mb-4 py-3 px-2 flex-col bg-white rounded-lg">
        <div className="mb-2 pl-4 font-bold text-sm text-black ">Nổi bật</div>
        {hot &&
          hot.map((item) => (
            <div
              key={item.id}
              className="flex py-[7px] px-4 text-black items-center rounded-lg cursor-pointer duration-300 ease-in-out bg-transparent"
            >
              <div className="border border-solid border-gray-200 rounded-[35%] overflow-hidden box-content grow-0 shrink-0 basis-8 h-8 mr-2">
                <img
                  src={item.img}
                  alt=""
                  className="object-contain max-w-full overflow-clip"
                />
              </div>
              <div className="font-medium text-black text-black">
                {item.desc}
              </div>
            </div>
          ))}
      </div>
      <div className="relative flex mb-4 py-3 px-2 flex-col bg-white rounded-lg">
        <div className="mb-2 pl-4 font-bold text-sm text-black ">Nổi bật</div>
        {categories &&
          categories.map((item) => (
            <div
              key={item.id}
              className="flex py-[7px] px-4 text-black items-center rounded-lg cursor-pointer duration-300 ease-in-out bg-transparent"
            >
              <div className="border border-solid border-gray-200 rounded-[35%] overflow-hidden box-content grow-0 shrink-0 basis-8 h-8 mr-2">
                <img
                  src={item.img}
                  alt=""
                  className="object-contain max-w-full overflow-clip"
                />
              </div>
              <div className="font-medium text-black text-black">
                {item.desc}
              </div>
            </div>
          ))}
      </div>
      <div className="rounded-lg px-2 py-3 bg-white ">
        <a
          href="#"
          title="Bán hàng cùng Tiki"
          className="flex px-4 py-[7px] items-center rounded-lg cursor:pointer ease-in duration-300 bg-transparent"
        >
          <div className="grow-0 shrink-0 basis-8 mr-2 block text-black">
            <img
              src={store}
              alt=""
              className="object-contain max-w-full overflow-clip cursor-pointer"
            />
          </div>
          <div className="font-normal text-sm text-black block cursor-pointer">
            Bán hàng cùng Tiki
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
