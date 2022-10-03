import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const attractions = [
  {
    name: 'Merlion'
  },
  {
    name: 'Mariana Bay Sands'
  },
  {
    name: 'Gardens By The Bay'
  },
  {
    name: 'Chinatown'
  },
  {
    name: 'Asian Civilisations Museum'
  },
  {
    name: 'Clarke Quay'
  },
  {
    name: 'Fort Canning Park'
  },
  {
    name: 'Singapore Flyer'
  },
  {
    name: 'Orchard Road'
  }
];

function PopoverFilter() {
  return (
    <Popover className="relative">
      {() => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button className="text-left w-full text-white font-medium cursor-pointer p-2 border-t last:border-y border-[#242832] focus:outline-none">
            <div className="flex justify-between items-center  py-1 px-2">
              <h6 className="text-sm cursor-pointer text-[#7C939B]">
                Filter By Favorite
              </h6>
              <span className="text-xs">▼</span>
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute w-full mt-4">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <dl className="grid grid-cols-1 bg-white h-[300px] overflow-auto">
                  {attractions.map((item) => (
                    <dt
                      key={item.name}
                      className="text-sm font-medium p-3 text-gray-900 cursor-pointer hover:bg-gray-200"
                    >
                      {item.name}
                    </dt>
                  ))}
                </dl>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default PopoverFilter;
