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
      <div className="grid grid-cols-7 space-y-2 gap-2">
        <div className="flex items-center">
          {mentor_name === "Himanshu" ? (
            <img
              src={thumbnail1}
              className="rounded-full object-contain w-8 "
              alt=""
            ></img>
          ) : (
            <img
              src={thumbnail2}
              className="rounded-full object-contain w-8"
              alt=""
            ></img>
          )}
        </div>
        <div className="col-span-2">
          <p className="text-xl font-medium ">{mentor_name}</p>
          <p>
            {mentor_name === "Himanshu" ? (
              <span className="leading-9">Flutter</span>
            ) : (
              <span className="leading-9">Django</span>
            )}
          </p>
        </div>
        <div className="col-span-2 flex flex-col items-center ">
          <p className="text-xl font-medium">{timings}</p>
          <p className="leading-9">{date}</p>
        </div>
        <div className="flex justify-between items-center col-span-2">
          {mentor_name === "Himanshu" ? (
            <div className="bg-green-400 h-12 w-24 flex justify-center items-center rounded-lg">
              {session_type}
            </div>
          ) : (
            <div className="bg-rose-400 h-12 w-24 flex justify-center items-center rounded-lg">
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
