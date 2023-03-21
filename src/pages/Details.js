import React, { useEffect, useState } from "react";

const Details = () => {
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
    <div>
      <div className="bg-slate-100 h-10">
        <div className="mx-auto px-[15px] w-[1270px] ">
          <div className="flex items-center text-sm gap-1">
            <a
              href=""
              className="relative flex pr-1 justify-center items-center h-10 text-slate-500 whitespace-nowrap"
            >
              Trang chủ
            </a>
            <span>></span>
            <a
              href=""
              className="relative flex pr-1 justify-center items-center h-10 text-slate-500 whitespace-nowrap"
            >
              Nhà sách Tiki
            </a>
            <span>></span>
            <a
              href=""
              className="relative flex pr-1 justify-center items-center h-10 text-slate-500 whitespace-nowrap"
            >
              Sách Tiếng Việt
            </a>
            <span>></span>
            <a
              href=""
              className="relative flex pr-1 justify-center items-center h-10 text-slate-500 whitespace-nowrap"
            >
              Sách Tôn Giáo - Tâm Linh
            </a>
            <span>></span>
            <a
              href=""
              className="relative flex pr-1 justify-center items-center h-10 text-slate-500 whitespace-nowrap"
            >
              Sách Muôn Kiếp Nhân Sinh(Bìa Cứng) - Nguyên Phong
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-[1270px] mx-auto">
        <img
          src=""
          alt=""
          className="absolute pointer-events-none top-4 left-8 w-[445px] h-[445px] "
        />
      </div>
      <div className="w-[1270px] mx-auto px-[15px]">
        <div className="flex mb-4 bg-white rounded">
          <div className="p-4 pr-0 relative">
            <div className="flex flex-col relative">
              <div className="text-center relative">
                <div className="relative flex justify-center items-center w-[444px] h-[444px] cursor-pointer">
                  <div className="relative flex w-[444px] h-[444px]">
                    <img
                      src="	https://salt.tikicdn.com/cache/750x750/ts/product/37/ee/9d/fda3088df9dde40c113b584616ae1b76.jpg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="initial flex w-full">
                <div className="bottom-4 left-4 absolute cursor-pointer block z-[1] ">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/doc-thu.svg"
                    alt=""
                    className="block w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="m-0 mt-4">
              <div className="flex">
                <a
                  href=""
                  className="cursor:pointer active:border relative w-16 h-16 mr-3 rounded overflow-hidden"
                >
                  <img
                    src="https://salt.tikicdn.com/cache/100x100/ts/product/37/ee/9d/fda3088df9dde40c113b584616ae1b76.jpg.webp"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="cursor:pointer active:border relative w-16 h-16 mr-3 rounded overflow-hidden"
                >
                  <img
                    src="https://salt.tikicdn.com/cache/100x100/ts/product/37/ee/9d/fda3088df9dde40c113b584616ae1b76.jpg.webp"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="cursor:pointer relative w-16 h-16 mr-3 rounded overflow-hidden"
                >
                  <img
                    src="https://salt.tikicdn.com/cache/100x100/media/catalog/producttmp/75/d1/00/4f2d0961f6ea3b6d8f0a406fec7f2592.jpg.webp"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="cursor:pointer relative w-16 h-16 mr-3 rounded overflow-hidden"
                >
                  <img
                    src="https://salt.tikicdn.com/cache/100x100/media/catalog/producttmp/82/dc/08/5bc42da66ac32715524a64a5d16de01c.jpg.webp"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="cursor:pointer relative w-16 h-16 mr-3 rounded overflow-hidden"
                >
                  <img
                    src="https://salt.tikicdn.com/cache/100x100/media/catalog/producttmp/4b/af/19/79bc5f3ac630f5915207cfb23626a104.jpg.webp"
                    alt=""
                  />
                </a>
                <a
                  href=""
                  className="cursor:pointer active:border relative w-16 h-16 mr-3 rounded overflow-hidden"
                >
                  <img
                    src="https://salt.tikicdn.com/cache/100x100/ts/product/37/ee/9d/fda3088df9dde40c113b584616ae1b76.jpg.webp"
                    alt=""
                  />
                  <span className="absolute top-0 left-0 flex justify-center items-center w-full h-full p-2 text-white text-[11px] bg-opacity-70 bg-black">
                    Xen Thêm 303 hình
                  </span>
                </a>
              </div>
            </div>
            <div className="flex mt-6 items-center">
              <div className="text-base">Chia sẻ:</div>
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg"
                alt=""
                className="ml-2 w-[28px] h-[28px] mr-2 cursor-pointer"
              />
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg"
                alt=""
                className="ml-2 w-[28px] h-[28px] mr-2 cursor-pointer"
              />
              <img
                src="	https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg"
                alt=""
                className="ml-2 w-[28px] h-[28px] mr-2 cursor-pointer"
              />
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg"
                alt=""
                className="ml-2 w-[28px] h-[28px] mr-2 cursor-pointer"
              />
              <img
                src="	https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg"
                alt=""
                className="ml-2 w-[28px] h-[28px] mr-2 cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-[360px] h-[120px] overflow-hidden mt-6 mx-auto mb-0 relative">
              <a className="bg-transparent cursor-pointer">
                <img
                  src="	https://salt.tikicdn.com/cache/w1080/ts/tka/0d/e1/6f/7beb243488a74f0712a451fe8e8d3df8.png.webp"
                  alt=""
                  className="w-[360px] h-[120px] overflow-hidden object-contain"
                />
              </a>
            </div>
          </div>
          <div className="my-0 mx-3 w-[1px] bg-slate-100 shrink-0"></div>
          <div className="shrink grow basis-0">
            <div className="py-4 pr-[28px] pl-0 relative">
              <div className="flex mt-2"></div>
              <h1 className="m-0 ml-1 text-2xl break-words">
                {" "}
                Sách Muôn Kiếp Nhân Sinh (Bìa Cứng) - Nguyên Phong
              </h1>
              <div className="flex items-center justify-between mt-1"></div>
            </div>
            <div className="flex p-0 pr-6">
              <div className="left shrink grow basis-0 pr-3">
                <div className="bg-none flex flex-col rounded px-4 pb-3">
                  <div className="flex justify-between bg-gradient-to-tr from-red-500 to-orange-400 text-white pt-1 px-4 pb-[6px] my-0 -mx-4 rounded ">
                    <div>
                      <span className="text-3xl font-bold">132.300 ₫</span>
                      <div>
                        <span className="text-opacity-50 text-white mr-2 line-through">
                          228.000 ₫
                        </span>
                        <span>-42%</span>
                      </div>
                    </div>
                    <div className="mt-[2px] flex flex-col items-end">
                      <span>Kết thúc sau:</span>
                      <div className="flex text-red-500 font-medium bg-opacity-5">
                        <span className="text-15px font-medium my-0 mx-1 py-0  rounded hour">
                          {hour < 10 ? `0${hour}` : hour} :
                        </span>

                        <span className="text-15px font-medium my-0 mx-1 py-0  rounded minute">
                          {minute < 10 ? `0${minute}` : minute} :
                        </span>

                        <span className="text-15px font-medium my-0 mx-1 py-0  rounded second">
                          {second < 10 ? `0${second}` : second}
                        </span>
                      </div>
                      <span>Đã bán 7</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-[22px] w-fit">
                    <div className="rounded bg-slate-200 flex w-fit items-center py-1 px-2 border-[0.5px] border-solid border-slate-400 cursor-pointer">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png"
                        alt=""
                        className="mr-[7px] w-[13px] h-4"
                      />
                      <span className="text-blue-900 font-normal">
                        Thưởng 0,66 ASA (≈ 145đ)
                      </span>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/question-blue.svg"
                        alt=""
                        className="ml-1 w-[10px] h-[10px]"
                      />
                    </div>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/43/01/71/d74d0e9e37a9bb14f35dcc0c816d2038.gif"
                      alt=""
                      className="max-w-[42px] ml-2 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="mt-4"></div>
                <div className="bg-white flex flex-col items-start mt-4 border border-solid border-slate-100 pt-4">
                  <div className="bg-white flex flex-col items-start mt-4 border-t border-solid border-slate-200">
                    <div className="shrink grow basis-0 cursor-pointer font-medium text-base">
                      1 Mã Giảm Giá
                    </div>
                    <div className="flex pr-1 flex-wrap">
                      <div className="cursor:pointer py-[3px] px-4 border border-solid border-blue-900 rounded font-medium text-blue-900 relative mt-2 mr-3">
                        Giảm 15K
                      </div>
                      <img
                        src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png"
                        alt=""
                        className="w-[28px] h-[28px] mt-2 -mb-3 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white mt-4 pl-2 ">
                  <div className="flex py-3 justify-between cursor-pointer">
                    <span>Giao đến</span>
                    <span className="underline font-medium overflow-hidden text-ellipsis">
                      Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
                    </span>
                    -
                    <span className="text-blue-700 text-base font-medium shrink-0">
                      Đổi địa chỉ
                    </span>
                  </div>
                  <div className="mb-3 border border-solid border-slate-200 p-4 rounded-lg">
                    <div className="flex flex-col">
                      <div className="flex items-center h-[20px]">
                        <img
                          src="https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png"
                          alt=""
                          className="w-8 align-middle overflow-clip"
                        />
                        <div className="text-green-600 font-medium ml-2 text-sm">
                          Thứ 5, ngày 23/03
                        </div>
                      </div>
                      <div className="flex mb-[2px]">Vận chuyển: 18.000đ</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4 py-4 border-t border-solid border-slate-200">
                  <div className="flex flex-col pl-4">
                    <p className="mb-[10px] text-base">Số lượng</p>
                    <div className="flex items-center mt-2">
                      <button className="p-1 rounded-t rounded-b cursor:pointer w-[30px] h-[30px] text-center outline-none bg-white border border-solid border-slate-300">
                        -
                      </button>
                      <input
                        type="text"
                        className="w-10 h-[30px] border border-solid border-slate-300 text-center outline-none overflow-visible"
                        value="1"
                      />
                      <button className="p-1 rounded-t rounded-b cursor:pointer w-[30px] h-[30px] text-center outline-none bg-white border border-solid border-slate-300">
                        +
                      </button>
                    </div>
                    <div className="mt-4 shrink grow basis-0 flex items-center justify-center">
                      <button className="bg-red-500 text-white cursor-pointer flex items-center justify-center min-w-[190px] h-12 font-medium capitalize border-none rounded outline-none max-w-[300px]">
                        Chọn Mua
                      </button>
                      <button className="border-2 px-2 rounded border-solid border-blue-900 text-blue-900 flex-col bg-white ml-3 justify-center cursor-pointer flex items-center h-12 min-w=[190px] font-medium max-w-[300px]">
                        Mua trước trả sau{" "}
                        <span className="text-xs mr-2 text-blue-900 font-medium">
                          Lãi suất 0%
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right pb-5 w-60">
                <div className="rounded shadow">
                  <div>
                    <div className="flex flex-col px-3 py-2">
                      <a href="" className="flex items-start">
                        <img
                          src="https://vcdn.tikicdn.com/cache/w100/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png.webp"
                          alt=""
                          className="w-[44px] h-auto mr-2 rounded-[50%]"
                        />
                        <div className="mb-3">
                          <span className="mb-[2px] font-medium ">
                            <span>Tiki Trading</span>
                            <img
                              src="	https://salt.tikicdn.com/cache/w100/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png.webp"
                              alt=""
                              className="w-[68px] h-[14px] object-contain"
                            />
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col min-h-[39px]">
                      <div className="flex flex-col items-center justify-center pr-2 border-r border-solid border-slate-200">
                        <div className="flex justify-between items-center">
                          <div className="w-20 ml-1">
                            <span className="font-medium text-sm border-r border-solid border-slate-200 pr-14">
                              {" "}
                              4.7/5{" "}
                              <i className="icomoon icomoon-star w-[14px]"></i>
                            </span>
                            <p className="text-xs pb-2">5.3tr+</p>
                          </div>
                          <div className="ml-6">
                            <span className="font-medium text-sm ">
                              {" "}
                              467.7k+{" "}
                              <i className="icomoon icomoon-star w-[14px]"></i>
                            </span>
                            <p className="text-xs pb-2">Theo dõi</p>
                          </div>
                        </div>

                        <div className="flex shrink grow basis-0">
                          <button className="ml-2 flex items-center justify-center rounded border border-solid border-blue-800 text-sm text-blue-600 font-medium px-3 py-2 text-center">
                            <img
                              src="https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png"
                              alt=""
                              className="w-[20px] h-[20px] mr-1"
                            />
                            Xem Shop
                          </button>
                          <button className="ml-2 flex items-center justify-center rounded border border-solid border-blue-800 text-xs text-blue-600 font-medium px-3 py-2 text-center">
                            <img
                              src="https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png"
                              alt=""
                              className="w-[20px] h-[20px] mr-1"
                            />
                            Theo dõi
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-3 justify-between"></div>
                  </div>
                  <div className="flex p-2 border-t border-solid border-slate-200"></div>
                </div>
                <div className="border border-solid border-slate-200 flex rounded items-center mt-4 py-2 px-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
