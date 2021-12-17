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
      <Header></Header>
      <SideNav></SideNav>

      <div className="fixed left-52 top-32 grid grid-cols-2 col-span-6 space-x-4">
        <div className="space-y-4">
          <div className="bg-green-200">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="bg-gray-200">
                <span>Profile Views: </span>
                {infoData?.dashboard_stats?.profile_views}
              </div>
              <div className="bg-gray-200">
                <span>Mentorship Sessions: </span>
                {infoData?.dashboard_stats?.mentorship_sessions}
              </div>
              <div className="bg-gray-200">
                <span>Job Applied: </span>
                {infoData?.dashboard_stats?.jobs_applied}
              </div>
              <div className="bg-gray-200">
                <span>Skills Verified: </span>
                {infoData?.dashboard_stats?.skills_verified}
              </div>
            </div>
          </div>
          <div className="bg-blue-200">
            {infoData?.upcoming_sessions?.map((session) => (
              <Sessions session={session} key={session.mentor_name}></Sessions>
            ))}
          </div>
        </div>
        <div className="bg-rose-200 ">
          {infoData?.job_postings?.map((post) => (
            <JobPosts post={post} key={post.role}></JobPosts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
