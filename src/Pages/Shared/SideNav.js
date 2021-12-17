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
  const [changeTitle, setChangeTitle] = useState(false);
  const titles = [
    {
      title: "Skrate",
      key: 1,
    },
    {
      title: "Dashboard",
      key: 2,
    },
    {
      title: "Achievements",
      key: 3,
    },
    {
      title: "Jobs",
      key: 4,
    },
    {
      title: "Profile",
      key: 5,
    },
  ];
  const title = (key) => {
    console.log(key);
  }
  return (
    <div className=" fixed bg-gray-700 top-0 left-0 h-screen w-52 p-9">
      <div>
        <p className="font-medium text-3xl">Skrate</p>
      </div>
      <span className="block my-16">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "shadow-inner custom-color rounded-2xl pt-5 p-3 text-center"
              : "p-3 text-center"
          }
          to="/home"
        >
          <FontAwesomeIcon key={1} onClick={()=>{title(key)}} className="text-3xl text-gray-800" icon={faHome} />
        </NavLink>
      </span>
      <span className="block mb-14" key={2}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "shadow-inner custom-color rounded-2xl pt-5 p-3" : "p-3"
          }
        >
          <FontAwesomeIcon
            className="text-3xl text-gray-800"
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
            className="text-3xl text-gray-800"
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
            className="text-3xl text-gray-800"
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
          <FontAwesomeIcon className="text-3xl text-gray-800" icon={faUser} />
        </NavLink>
      </span>
    </div>
  );
};

export default SideNav;
