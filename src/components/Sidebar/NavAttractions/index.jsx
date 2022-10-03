import React from 'react';
import { Disclosure } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { selectDataFromMenu } from '../../../redux/actions/selectedDataAction';

const touristAttractions = [
  { attraction: 'Merlion' },
  {
    attraction: 'Marina Bay Sands',
    resorts: [
      'ArtScience Museum',
      'Mariana Bay Sands Skypark',
      'Double Helix Bridge'
    ]
  },
  {
    attraction: 'Gardens By The Bay',
    resorts: [
      'ArtScience Museum',
      'Mariana Bay Sands Skypark',
      'Double Helix Bridge'
    ]
  },
  {
    attraction: 'Chinatown',
    resorts: [
      'ArtScience Museum',
      'Mariana Bay Sands Skypark',
      'Double Helix Bridge'
    ]
  },
  { attraction: 'Asian Civilisations Museum' },
  { attraction: 'Clarke Quay' },
  { attraction: 'Fort Canning Park' },
  { attraction: 'Singapore Flyer' },
  { attraction: 'Orchard Road' }
];

function NavAttractions() {

  const dispatch = useDispatch();
  const selectedDataMenuHandler = (attraction) => {
    dispatch(selectDataFromMenu(attraction));
  };

  return (
    <dl className="mt-[45px]">
      {touristAttractions.map((menu, index) =>
        menu.resorts ? (
          <Disclosure key={index}>
            <Disclosure.Button
              className={`text-left w-full text-white font-medium cursor-pointer p-2 border-t last:border-y border-[#242832]`}
              onClick={() => selectedDataMenuHandler(menu.attraction, index)}
            >
              <dt className="flex justify-between items-center hover:text-[#92D72E] hover:bg-[#1C1F27] py-1 px-2">
                <h6 className="text-base">{menu.attraction}</h6>
                <span className="text-xs">▼</span>
              </dt>
            </Disclosure.Button>
            <Disclosure.Panel as="dl">
              {menu.resorts.map((resort, index) => (
                <dt
                  key={index}
                  className="text-sm text-[#7C939B] hover:bg-[#1C1F27] cursor-pointer px-8 py-1"
                >
                  {resort}
                </dt>
              ))}
            </Disclosure.Panel>
          </Disclosure>
        ) : (
          <div
            key={menu.attraction}
            className={`text-left w-full text-white font-medium cursor-pointer p-2 border-t last:border-y border-[#242832]`}
            onClick={() => selectedDataMenuHandler(menu.attraction)}
          >
            <dt className="flex justify-between items-center hover:text-[#92D72E] hover:bg-[#1C1F27] py-1 px-2">
              <h6 className="text-base">{menu.attraction}</h6>
            </dt>
          </div>
        )
      )}
    </dl>
  );
}

export default NavAttractions;
