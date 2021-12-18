import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import SideNav from "../Shared/SideNav";
import JobPosts from "./JobPosts";
import Sessions from "./Sessions";

const Home = () => {
  const [infoData, setInfoData] = useState();
  useEffect(() => {
    fetch("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818")
      .then((res) => res.json())
      .then((data) => setInfoData(data));
  }, []);
  return (
    <div>
      <Header name={infoData?.full_name}></Header>
      <SideNav></SideNav>

      <div className="absolute top-28 left-48 grid place-content-stretch grid-cols-1 col-span-12 lg:grid-cols-2 lg:col-span-6 lg:gap-x-16 mb-10 lg:mr-16 gap-y-6 lg:gap-y-0">
        <div className="space-y-6">
          <div className="p-8 rounded-3xl font-medium border border-bordergray">
            <div className="flex flex-col md:flex-row md:text-start text-center justify-between">
              <p className="xl:text-3xl text-2xl">Overview</p>
              <button className="xl:text-xl text-lg bg-gray px-3 py-2 rounded-lg">
                Dashboard
              </button>
            </div>
            <div className=" grid md:grid-cols-2 grid-rows-2 gap-y-8 gap-x-10 pt-6">
              <div className="bg-gray flex xl:flex-row justify-around lg:flex-col xl:text-start lg:text-center items-center h-28 rounded-2xl p-2">
                <span className="w-4/6 xl:text-xl">Profile Views </span>
                <span className="text-4xl text-blue ">
                  {infoData?.dashboard_stats?.profile_views}
                </span>
              </div>
              <div className="bg-gray flex justify-around xl:flex-row lg:flex-col xl:text-start lg:text-center items-center h-28 rounded-2xl p-2">
                <span className="w-4/6 xl:text-xl">Mentorship Sessions </span>
                <span className="text-4xl text-blue">
                  {infoData?.dashboard_stats?.mentorship_sessions}
                </span>
              </div>
              <div className="bg-gray flex xl:flex-row lg:flex-col xl:text-start lg:text-center justify-around items-center h-28 rounded-2xl p-2">
                <span className="w-4/6 xl:text-xl">Job Applied </span>
                <span className="text-4xl text-blue">
                  {infoData?.dashboard_stats?.jobs_applied}
                </span>
              </div>
              <div className="bg-gray flex justify-around xl:flex-row lg:flex-col xl:text-start lg:text-center items-center h-28 rounded-2xl p-2">
                <span className="w-4/6 xl:text-xl ">Skills Verified </span>
                <span className="text-4xl text-blue">
                  {infoData?.dashboard_stats?.skills_verified}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-3xl font-medium border border-bordergray">
            <div className="flex justify-between flex-col md:flex-row md:text-start text-center">
              <p className="xl:text-3xl text-2xl">Upcoming Sessions</p>
              <button className="xl:text-xl text-lg bg-gray px-6 py-2 rounded-lg">
                View All
              </button>
            </div>
            <div className="pt-4  space-y-4">
              {infoData?.upcoming_sessions?.map((session) => (
                <Sessions
                  session={session}
                  key={session.mentor_name}
                ></Sessions>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 rounded-3xl font-medium border border-bordergray">
          <div className="flex flex-col md:flex-row justify-between md:text-start text-center">
            <p className="xl:text-3xl text-2xl">New Job Postings</p>
            <button className="xl:text-xl text-lg bg-gray px-6 py-2 rounded-lg">
              View All
            </button>
          </div>
          <div className="pt-6 space-y-12">
            {infoData?.job_postings?.map((post) => (
              <JobPosts post={post} key={post.role}></JobPosts>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
