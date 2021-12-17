import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import thumbnail1 from ".././../images/thumbnail-scene-1.png";
import thumbnail2 from ".././../images/thumbnail-scene-3.png";
import thumbnail3 from ".././../images/thumbnail-scene-4.png";
import thumbnail4 from ".././../images/thumbnail-scene-5.png";

const JobPosts = (props) => {
  const { organization_name, role, date_posted, location } = props?.post;
  const handleArrowClick = () => {
    window.alert("A Button Was Clicked");
  };
  return (
    <div className=" grid grid-cols-6 ">
      <div className="flex items-center">
        {organization_name === "Amazon" && (
          <img
            src={thumbnail1}
            className="rounded-full object-contain w-12 "
            alt=""
          ></img>
        )}
        {organization_name === "Facebook" && (
          <img
            src={thumbnail2}
            className="rounded-full object-contain w-12 "
            alt=""
          ></img>
        )}
        {organization_name === "CodeNation" && (
          <img
            src={thumbnail3}
            className="rounded-full object-contain w-12 "
            alt=""
          ></img>
        )}
        {organization_name === "Google" && (
          <img
            src={thumbnail4}
            className="rounded-full object-contain w-12 "
            alt=""
          ></img>
        )}
      </div>
      <div className="col-span-3">
        <p className="text-xl font-medium">{role}</p>
        <p className="text-md">{organization_name}</p>
        <p className="text-sm">{location}</p>
      </div>
      <div className="flex justify-between items-center col-span-2">
        <span className="text-xl">{date_posted}</span>
        <button>
          <FontAwesomeIcon onClick={handleArrowClick} icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default JobPosts;
