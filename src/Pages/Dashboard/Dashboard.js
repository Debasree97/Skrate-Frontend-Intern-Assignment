import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import SideNav from "../Shared/SideNav";

const Dashboard = () => {
    const [infoData, setInfoData] = useState();
    useEffect(() => {
      fetch("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818")
        .then((res) => res.json())
        .then((data) => setInfoData(data));
    }, []);
  return (
    <div>
      <SideNav></SideNav>
      <Header name={infoData?.full_name}></Header>
      <div className="absolute top-32 left-44 flex flex-col lg:flex-row gap-y-0 lg:gap-y-14 lg:gap-x-14 lg:mr-16 p-6 place-content-stretch mb-5">
        <div className=" border border-bordergray px-16 sm:px-32 xl:px-48 rounded-3xl py-48 ">
          <p className="font-9xl">Dashboard</p>
        </div>
        <div className=" border border-bordergray px-16 sm:px-32 xl:px-48 rounded-3xl py-48">
          <p className="font-9xl">Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
