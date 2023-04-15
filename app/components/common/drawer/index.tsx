import moment from 'moment';
import React from 'react';
import Globe from '~/components/icons/Globe';
import { CalEvent } from '~/utils/interfaces';

interface DrawerProps {
  event: CalEvent;
  isDrawerVisible: boolean;
  toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ event, isDrawerVisible, toggleDrawer }) => (
  <div className={`w-full h-full fixed inset-0 ${isDrawerVisible ? '' : 'invisible'}`}>
    <div
      onClick={toggleDrawer}
      className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${
        isDrawerVisible ? 'opacity-50' : 'opacity-0'
      }`}
    ></div>
    <div
      onClick={toggleDrawer}
      className={`pt-20 pb-12 px-12 w-1/4 bg-white h-full absolute right-0 duration-300 ease-out transition-all flex flex-col justify-between ${
        isDrawerVisible ? '' : 'translate-x-full'
      }`}
    >
      <div>
        <div className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
          <button className="w-78 h-33 left-1406 top-28 px-4 py-2 uppercase mr-8 bg-gray-100 rounded-lg ">
            Close
          </button>
        </div>
        <h1 className=" font-semibold text-3xl leading-10 capitalize">{event.title}</h1>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 my-2">
          <Globe />
          <p className="px-1">{event.type}</p>
        </span>
        <p className="py-2 text-base font-normal leading-5 text-left">
          {moment(event.start).format('MMMM DD, YYYY h A')} - {moment(event.end).format('h A')}
        </p>
        <p className="py-2 text-base font-normal leading-5 text-left">{event.location}</p>
        <p className="py-4 font-normal text-base">{event.description}</p>
        <h3 className="font-medium text-lg">People</h3>
        <div>
          {event.attendees?.map(({ attendee }) => (
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <p className="py-2 font-normal text-base">{attendee.name}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-gray-200 rounded-lg hover:bg-gray-300  w-full p-3 font-normal text-lg leading-5 text-gray-700">
        Join event
      </button>
    </div>
  </div>
);

export default Drawer;
