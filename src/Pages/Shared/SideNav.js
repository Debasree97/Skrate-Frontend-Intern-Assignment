import React from "react";
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
    const activeStyle = {
        backgroundColor: "#F6F7FF",
        width: "30px",
        cursor: "pointer",
    };
  return (
    <div className="ml-10 mt-10">
      <NavLink activeStyle={activeStyle} className="block mb-16" to="/home">
        <FontAwesomeIcon className="text-3xl text-gray-800" icon={faHome} />
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="block mb-14"
        to="/dashboard"
      >
        <FontAwesomeIcon className="text-3xl text-gray-800" icon={faColumns} />
      </NavLink>
      <NavLink className="block mb-14" to="/achievement">
        <FontAwesomeIcon
          className="text-3xl text-gray-800"
          icon={faGraduationCap}
        />
      </NavLink>
      <NavLink className="block mb-14 text-gray-800" to="/job">
        <FontAwesomeIcon className="text-3xl" icon={faBriefcase} />
      </NavLink>
      <NavLink to="/profile">
        <FontAwesomeIcon className="text-3xl text-gray-800" icon={faUser} />
      </NavLink>
    </div>
  );
};

export default SideNav;
