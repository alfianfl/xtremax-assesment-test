import React, { useState } from 'react';

// component
import NavButton from './NavButton';
import NavAttractions from './NavAttractions';
import PopoverFilter from './PopoverFilter';

// image source
import browse from '../../assets/img/browse.png';
import suggest from '../../assets/img/suggest.png';
import videos from '../../assets/img/videos.png';
import blog from '../../assets/img/blog.png';
import about from '../../assets/img/about.png';

const navLink = [
  {
    logo: browse,
    name: 'Browse',
    active: true
  },
  {
    logo: suggest,
    name: 'Suggest Attraction',
    active: false
  },
  {
    logo: videos,
    name: 'Videos',
    active: false
  },
  {
    logo: blog,
    name: 'Blog',
    active: false
  },
  {
    logo: about,
    name: 'About',
    active: false
  }
];
function Sidebar() {
  const [activeLink, setActiveLink] = useState('Browse');
  return (
    <aside className="h-screen bg-[#313541] flex">
      <div className="main-sidebar flex flex-col space-y-0.5">
        {navLink.map((nav, index) => (
          <NavButton
            onClick={() => setActiveLink(nav.name)}
            key={index}
            logo={nav.logo}
            active={nav.active}
            label={nav.name}
          />
        ))}
      </div>

      {activeLink === 'Browse' && (
        <div className="w-[350px] p-[25px] bg-[#282C37] overflow-auto no-scrollbar">
          <PopoverFilter />
          <NavAttractions />
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
