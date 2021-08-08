import React from 'react';
import Slider from '../components/Slider';
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="flex justify-between items-center w-1/2">
          <p className="font-body text-left  text-black-700 text-lg		font-bold		pb-4 pt-10		">
            Popular going out destinations
          </p>
          <ChevronRightIcon className="text-gray-300 mt-10 h-7 w-7 flex justify-end" />
        </div>
        <Slider x={'5'} />
        <div className="flex justify-between items-center w-1/2">
          <div className="flex flex-col justify-between w-1/2">
            <p className="font-body text-left  text-black-700 text-lg		font-bold	 pt-10		">
              World's Top Clubs
            </p>
            <p className="font-body text-left text-black-700 text-md			">
              The best clubs in the world
            </p>
          </div>
          <ChevronRightIcon className="text-gray-300 mt-10 h-7 w-7 flex justify-end" />
        </div>

        <Slider x={'3'} />
        <div className="flex justify-between items-center w-1/2">
          <div className="flex flex-col justify-between w-1/2">
            <p className="font-body text-left 	 text-black-700 text-lg		font-bold	 pt-10	">
              Popular bars
            </p>
            <p className="font-body text-left 	 text-black-700 text-md			">
              The most famous bars and lounges worldwide
            </p>
          </div>
          <ChevronRightIcon className="text-gray-300 mt-10 h-7 w-7 flex justify-end" />
        </div>
        <Slider x={'3'} />

        <div className="flex justify-between items-center w-1/2">
          <div className="flex flex-col justify-between w-1/2">
            <p className="font-body text-left  text-black-700 text-lg		font-bold	 pt-10		">
              Popular restaurants
            </p>
            <p className="font-body text-left text-black-700 text-md			">
              The most famous restaurants worldwide
            </p>
          </div>
          <ChevronRightIcon className="text-gray-300 mt-10 h-7 w-7 flex justify-end" />
        </div>
        <Slider x={'3'} />

        <div className="flex justify-between items-center w-1/2">
          <div className="flex flex-col justify-between w-1/2">
            <p className="font-body text-left  text-black-700 text-lg		font-bold	 pt-10		">
              Trending Events
            </p>
            <p className="font-body text-left text-black-700 text-md			">
              Most popular events in the world right now
            </p>
          </div>
          <ChevronRightIcon className="text-gray-300 mt-10 h-7 w-7 flex justify-end" />
        </div>
        <Slider x={'3'} />
      </div>
    </div>
  );
}
