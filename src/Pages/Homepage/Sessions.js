import React from "react";
import thumbnail1 from "../../images/thumbnail-scene-1.png";
import thumbnail2 from "../../images/thumbnail-scene-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sessions = (props) => {
  const { mentor_name, timings, date, session_type } = props?.session;
  const handleArrowClick = () => {
    window.alert("A Button Was Clicked");
  };
  return (
    <div>
      <div className="grid xl:grid-cols-8 lg:grid-cols-5 sm:grid-cols-8 grid-cols-5 cols-span-6 p-2 rounded-2xl gap-2 hover:bg-gray">
        <div className="flex items-center">
          {mentor_name === "Himanshu" ? (
            <img
              src={thumbnail1}
              className="rounded-full object-contain w-12 "
              alt=""
            ></img>
          ) : (
            <img
              src={thumbnail2}
              className="rounded-full object-contain w-12"
              alt=""
            ></img>
          )}
        </div>
        <div className="xl:col-span-2 lg:col-span-3 sm:col-span-2 col-span-3">
          <p className="md:text-xl md:font-medium font-semibold">
            {mentor_name}
          </p>
          <p>
            {mentor_name === "Himanshu" ? (
              <span className="leading-9">Flutter</span>
            ) : (
              <span className="leading-9">Django</span>
            )}
          </p>
        </div>
        <div className="col-span-3 flex flex-col xl:items-center items-start">
          <p className="md:text-xl md:font-medium font-semibold text-center">
            {timings}
          </p>
          <p className="leading-9">{date}</p>
        </div>
        <div className="flex justify-between items-center col-span-2 ">
          {mentor_name === "Himanshu" ? (
            <div className="bg-pink h-12 w-24 flex justify-center items-center rounded-lg">
              {session_type}
            </div>
          ) : (
            <div className="bg-skyblue h-12 w-24 flex justify-center items-center rounded-lg">
              {session_type}
            </div>
          )}

          <button>
            <FontAwesomeIcon onClick={handleArrowClick} icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
