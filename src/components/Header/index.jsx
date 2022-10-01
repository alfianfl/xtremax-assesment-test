import React from 'react';
import settings from '../../assets/img/settings.png';
import close from '../../assets/img/close.png';
import faq from '../../assets/img/faq.png';

const options = [
  {
    name: 'settings',
    src: settings
  },
  {
    name: 'faq',
    src: faq
  },
  {
    name: 'close',
    src: close
  }
];

function Header() {
  const handlerOption = (optionName) => {
    switch (optionName) {
      case 'close':
        console.log('test');
        break;
      default:
    }
  };

  return (
    <header className="main-header flex justify-between z-50 w-full max-h-[127px] py-[42px] px-[55px] bg-[#F4F7FA]">
      <h1 className="title-main text-2xl text-[#313541] font-bold uppercase">
        top-rated tourist attractions in singapore
      </h1>

      <dl className="header-option flex space-x-4">
        {options.map((option, index) => (
          <img
            onClick={() => handlerOption(option.name)}
            key={index}
            src={option.src}
            alt={`${option.name}-icon`}
            className="cursor-pointer max-w-[31px] max-h-[31px]"
          />
        ))}
      </dl>
    </header>
  );
}

export default Header;
