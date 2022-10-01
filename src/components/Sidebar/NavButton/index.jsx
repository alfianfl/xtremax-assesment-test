import React from 'react';

function NavButton({ logo, active, label }) {
  return (
    <div
      className={`${
        active && 'bg-[#72CDD2]'
      } py-[26px] border-black cursor-pointer hover:bg-[#72CDD2]`}
    >
      <div className="flex flex-col items-center space-y-1">
        <img src={logo} className="max-w-[41px]" alt={`${label}-icon`} />
        <h6
          className={`${
            active ? 'text-white' : 'text-[#8298A0]'
          } text-base text-center leading-[15px]`}
        >
          {label}
        </h6>
      </div>
    </div>
  );
}

export default NavButton;
