import React from 'react';
import thumbnail from "../../../images/thumbnail-1.png"

const Header = () => {
    return (
      <div className="absolute right-0 top-0 p-9 bg-orange-300">
        <div className="flex flex-row  items-center">
          <img
            className="rounded-full object-contain w-12 sm:mr-4"
            src={thumbnail}
            alt=""
          />
          <p className="text-2xl hidden sm:block mr-10">Joe Stockton</p>
        </div>
      </div>
    );
};

export default Header;