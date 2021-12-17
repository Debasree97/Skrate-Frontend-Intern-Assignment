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

      <div className=" absolute top-28 left-44 grid grid-cols-1 col-span-12 lg:grid-cols-2 lg:col-span-6 lg:space-x-12 mb-10 lg:mr-16 space-y-6 lg:space-y-0">
        <div className="space-y-6 w-auto">
          <div className="p-6 rounded-3xl font-medium border border-bordergray">
            <div className="flex flex-col md:flex-row text-center justify-between">
              <p className="text-3xl">Overview</p>
              <button className="text-xl bg-gray px-3 py-2 rounded-lg">
                Dashboard
              </button>
            </div>
            <div className=" grid md:grid-cols-2 grid-rows-2 gap-y-8 gap-x-10 pt-6">
              <div className="bg-gray flex justify-around items-center h-24 rounded-2xl">
                <span className="w-4/6 text-xl">Profile Views </span>
                <span className="text-3xl text-blue ">
                  {infoData?.dashboard_stats?.profile_views}
                </span>
              </div>
              <div className="bg-gray flex justify-around  items-center h-24 rounded-2xl">
                <span className="w-4/6 text-xl">Mentorship Sessions </span>
                <span className="text-3xl text-blue">
                  {infoData?.dashboard_stats?.mentorship_sessions}
                </span>
              </div>
              <div className="bg-gray flex justify-around items-center h-24 rounded-2xl">
                <span className="w-4/6 text-xl">Job Applied </span>
                <span className="text-3xl text-blue">
                  {infoData?.dashboard_stats?.jobs_applied}
                </span>
              </div>
              <div className="bg-gray flex justify-around items-center h-24 rounded-2xl">
                <span className="w-4/6 text-xl">Skills Verified </span>
                <span className="text-3xl text-blue">
                  {infoData?.dashboard_stats?.skills_verified}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-3xl font-medium border border-bordergray">
            <div className="flex justify-between flex-col md:flex-row text-center">
              <p className="text-3xl">Upcoming Sessions</p>
              <button className="text-xl bg-gray px-6 py-2 rounded-lg">
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
          <div className="flex flex-col md:flex-row text-center justify-between">
            <p className="text-3xl">New Job Postings</p>
            <button className="text-xl bg-gray px-6 py-2 rounded-lg">
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
