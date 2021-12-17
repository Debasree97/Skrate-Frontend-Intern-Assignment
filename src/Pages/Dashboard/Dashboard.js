import React from "react";
import Header from "../Shared/Header/Header";
import SideNav from "../Shared/SideNav";

const Dashboard = () => {
  return (
    <div>
      <SideNav></SideNav>
      <Header></Header>
      <div className="absolute top-32 left-44 grid grid-cols-2 space-x-14 mr-16">
        <div className="cols-span-6"></div>
        <div className=" border border-gray-400 cols-span-6 px-48 rounded-3xl py-52">
          <p className="font-9x">Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
