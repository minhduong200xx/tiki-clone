import React from "react";
import Logo from "../img/logo.png";
import SearchIcon from "../img/search-icon.png";
import home from "../img/home.png";
import astra from "../img/astra.png";
import acc from "../img/account.png";
import cart from "../img/cart-icon.png";
import location from "../img/location.png";
import freeship from "../img/freeship.png";
import arrright from "../img/arrowright.png";
import { keyword } from "../utils/data";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="relative py-2 z-[999] ">
        <div className=" px-6 w-[1280px] mx-auto">
          <div className="flex relative z-[2] items-center">
            <div className="flex flex-shrink flex-grow basis-0 items-center">
              <div className="mr-12 flex items-start flex-shrink-0">
                <div className="flex justify-between flex-grow flex-shrink basis-0">
                  <Link to="/" className="text-blue-500 bg-transparent block">
                    <img src={Logo} alt="" className="h-[40px]" />
                  </Link>
                </div>
              </div>
              <div className="flex-shrink flex-grow basis-0 block">
                <div className="w-full flex relative border border-solid border-slate-200 rounded-lg items-center">
                  <img src={SearchIcon} alt="" className="w-5 h-5 ml-[18px]" />
                  <input
                    type="text"
                    placeholder="Bạn tìm gì hôm nay"
                    name=""
                    id=""
                    className="px-2 text-sm rounded-lg outline-none shrink grow basis-0 overflow-visible m-0"
                  />
                  <button className="cursor-pointer w-[92px] h-[38px] py-1 pr-1 rounded-lg rounded-l-none bg-transparent text-blue-600 font-normal text-sm flex items-center justify-center relative hover:bg-blue-100">
                    <div className="block h-5 absolute -left-1 border-l-[1px] border-solid border-slate-300  text-blue-600 "></div>
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end ml-12">
              <div className="flex items-center justify-center px-4 py-2 cursor-pointer relative rounded-lg hover:bg-blue-100">
                <img
                  src={home}
                  alt=""
                  className="w-6 h-6 mr-1 rounded-[50%] overflow-clip"
                />
                <a href="" className=" text-sm text-blue-600 font-medium ">
                  Trang chủ
                </a>
              </div>
              <div className="flex items-center justify-center px-4 py-2 cursor:pointer relative rounded-lg hover:bg-gray-200 cursor-pointer">
                <img
                  src={astra}
                  alt=""
                  className="w-6 h-6 mr-1 rounded-[50%] overflow-clip"
                />
                <a href="" className=" text-sm text-gray-500 font-medium">
                  Astra
                </a>
              </div>
              <div className="flex items-center justify-center px-4 py-2 cursor:pointer relative rounded-lg hover:bg-gray-200 cursor-pointer">
                <img
                  src={acc}
                  alt=""
                  className="w-6 h-6 mr-1 rounded-[50%] overflow-clip"
                />
                <a href="" className="text-sm text-gray-500 font-medium">
                  Tài khoản
                </a>
              </div>
              <div className="relative block ">
                <a href="#" className="text-blue-600 bg-transparent">
                  <div className="ml-6 relative p-0 flex items-center justify-center cursor:pointer rounded-lg  hover:bg-blue-100">
                    <div className="block h-5 absolute -left-3 border-l-[1px] border-solid border-slate-300"></div>
                    <div className="relative flex w-10 h-10 items-center justify-center ">
                      <img
                        src={cart}
                        alt=""
                        className="w-6 h-6 mr-0 overflow-clip"
                      />
                      <span className="text-white bg-red-500 h-4 right-0 -top-1 inline-block text-center font-bold text-[10px] absolute px-1 py-[0.5px] rounded-lg">
                        0
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex relative justify-between z-[1]">
            <div className="flex h-6 w-[712px] ml-[105px] mt-2 items-start flex-wrap overflow-hidden">
              {keyword &&
                keyword.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    className="block font-normal text-sm text-slate-400 mr-3 whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ))}
            </div>
            <div className="max-w-[348px] shrink-0 grow-0 basis-[348px] mt-2 block">
              <div className="flex items-center cursor:pointer justify-end">
                <img
                  src={location}
                  alt=""
                  className="w-5 h-5 mr-1 max-w-full overflow-clip "
                />
                <h4 className="block m-0 font-normal text-sm pr-1 text-slate-600 whitespace-nowrap">
                  Giao đến:
                </h4>
                <div className="underline font-medium text-sm overflow-hidden text-black block cursor-pointer">
                  Bạn muốn giao hàng tới đâu ?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 relative z-[1] flex flex-row justify-center items-center px-4 py-2 gap-1 border-y-[1px] border-x-0 border-solid border-slate-300">
        <a href="" className="flex justify-center items-center bg-transparent">
          <img
            src={freeship}
            alt=""
            className="object-contain max-w-full overflow-clip h-3"
          />
          <div className="text-sm pl-1 block ">
            <strong>mọi đơn từ 149k.</strong> Áp dụng cho cả TikiNOW 2h
          </div>
          <div className="ml-1 object-contain">
            <img src={arrright} alt="" className="w-[7px] h-[11px]" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
