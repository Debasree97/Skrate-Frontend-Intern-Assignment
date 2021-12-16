import React from 'react';
import thumbnail from "../../../images/thumbnail-1.png"

const Header = () => {
    return (
      <div className="flex flex-row justify-between items-center p-9">
        <div>
          <p className="font-medium text-3xl">Skrate</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <img
            className="rounded-full object-contain w-12 sm:mr-4"
            src={thumbnail}
            alt=""
          />
          <p className='text-2xl hidden sm:block mr-10'>Joe Stockton</p>
        </div>
      </div>
    );
};

export default Header;