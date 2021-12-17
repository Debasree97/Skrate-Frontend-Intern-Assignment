import React from "react";
import thumbnail1 from "../../images/thumbnail-scene-1.png";
import thumbnail2 from "../../images/thumbnail-scene-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sessions = (props) => {
    const { mentor_name, timings, date, session_type } = props?.session;
    const handleArrowClick = () => {
        window.alert("A Button Was Clicked")
    }
  return (
    <div className="grid grid-cols-5 space-y-2 gap-2">
      <div>
        {mentor_name === "Himanshu" ? (
          <img
            src={thumbnail1}
            className="rounded-full object-contain w-12 "
            alt=""
          ></img>
        ) : (
          <img
            src={thumbnail2}
            className="rounded-full object-contain w-12 "
            alt=""
          ></img>
        )}
      </div>
      <div>
        <p>{mentor_name}</p>
        <p>
          {mentor_name === "Himanshu" ? (
            <span>Flutter</span>
          ) : (
            <span>Django</span>
          )}
        </p>
      </div>
      <div>
        <p>{timings}</p>
        <p>{date}</p>
      </div>
      {mentor_name === "Himanshu" ? (
        <div className="bg-green-400">{session_type}</div>
      ) : (
        <div className="bg-rose-400">{session_type}</div>
      )}
      <div>
        <button>
          <FontAwesomeIcon onClick={handleArrowClick} icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Sessions;
