import React from "react";
import Official from "../components/Official";
import Sale from "../components/Sale";
import Sidebar from "../components/Sidebar";
import Slide from "../components/Slide";
import Today from "../components/Today";
import TrendingColections from "../components/TrendingColections";
import store from "../img/store.webp";
import { hot } from "../utils/data.js";
const Home = () => {
  return (
    <div className="px-6 mx-auto w-[1280px] bg-slate-100">
      <div className="flex pt-4 justify-between">
        <div className="sidebar w-[230px] max-h-[100vh] sticky overflow-y-scroll  top-4 bg-transparent flex pb-[117px] flex-col text-sm text-black rounded-lg ">
          <Sidebar></Sidebar>
        </div>
        <div className="w-[calc(100%-254px)] overflow-x-hidden block ">
          <Slide></Slide>
          <Official></Official>
          <Today></Today>
          <Sale></Sale>
          <TrendingColections></TrendingColections>
        </div>
      </div>
    </div>
  );
};

export default Home;
