import React, { useState } from "react";
import Header from "../Shared/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faColumns,
  faGraduationCap,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [changeTitle, setChangeTitle] = useState('Skrate');

  const title = (event,title) => {
    console.log(title);
    setChangeTitle(title);
    console.log(changeTitle);
  }
  return (
    <div className=" fixed  top-0 left-0 h-screen w-44 xl:w-52 p-9">
      <div>
        <p className="font-medium text-3xl">{changeTitle}</p>
      </div>
      <span className="block my-16" key={1}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "shadow-inner custom-color rounded-2xl pt-5 p-3 text-center"
              : "p-3 text-center"
          }
          to="/home"
        >
          <FontAwesomeIcon
            onClick={(event) => {
              title(event, "Skrate");
            }}
            className="text-3xl text-darkgray"
            icon={faHome}
          />
        </NavLink>
      </span>
      <span className="block mb-14">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "shadow-inner custom-color rounded-2xl pt-5 p-3" : "p-3"
          }
        >
          <FontAwesomeIcon
            onClick={(event) => {
              title(event, "Dashboard");
            }}
            className="text-3xl text-darkgray"
            icon={faColumns}
          />
        </NavLink>
      </span>
      <span className="block mb-14" key={3}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "shadow-inner custom-color rounded-2xl pt-5 p-3" : "p-3"
          }
          to="/achievement"
        >
          <FontAwesomeIcon
            className="text-3xl text-darkgray"
            icon={faGraduationCap}
          />
        </NavLink>
      </span>
      <span className="block mb-14" key={4}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "shadow-inner custom-color rounded-2xl pt-5 p-3" : "p-3"
          }
          to="/job"
        >
          <FontAwesomeIcon
            className="text-3xl text-darkgray"
            icon={faBriefcase}
          />
        </NavLink>
      </span>
      <span className="block" key={5}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "shadow-inner custom-color rounded-2xl pt-5 p-3" : "p-3"
          }
          to="/profile"
        >
          <FontAwesomeIcon className="text-3xl text-darkgray" icon={faUser} />
        </NavLink>
      </span>
    </div>
  );
};

export default SideNav;
