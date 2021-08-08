import { SearchIcon } from '@heroicons/react/solid';

function SearchBar() {
  return (
    <div className=" w-1/3 flex justify-center items-center pt-2">
      <input
        type="text"
        className="font-body flex w-full h-14 bg-gray-100 pr-8 pl-8 rounded-l-lg z-0 focus:shadow focus:outline-none "
        placeholder="Search a city, club, events..."
      ></input>
      <div className="flex justify-center items-center h-14 w-10 bg-gray-600 hover:bg-gray-700 rounded-r-lg">
        <SearchIcon className="h-7 w-7 text-gray-400 z-20" />
      </div>
    </div>
  );
}

export default SearchBar;
