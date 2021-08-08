import React from 'react';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <div>
      <header class="border-b md:flex md:items-center md:justify-between p-1 pb-0 shadow-lg md:pb-3">
        <div class="ml-2 w-96	flex items-center justify-between mb-4 md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest">
            <a
              class="font-body font-extrabold		 no-underline text-grey-darkest hover:text-black"
              href="#"
            >
              NIGHTLIFE
            </a>
          </h1>

          <a class="text-black hover:text-orange md:hidden" href="#">
            <i class="fa fa-2x fa-bars"></i>
          </a>
        </div>
        <SearchBar />
        <nav className="w-96		mr-2	 flex justify-end ">
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <a
                class="font-body block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                href="#"
              >
                List an event
              </a>
            </li>
            <li class="md:ml-4">
              <a
                class="font-body border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                href="#"
              >
                City Guides
              </a>
            </li>
            <li class="md:ml-4">
              <a
                class="font-body border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                href="#"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
