import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="hidden md:flex gap-4 flex-grow justify-center">
      <div className="flex flex-grow max-w-[600px]">
        <input type="search" placeholder="Search"
          className="rounded-l-full flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent" />
        <div className="flex flex-shrink-0 bg-gray-300 rounded-r-full items-center justify-center pl-3 pr-4 py-2 cursor-pointer hover:bg-highlight transition-colors">
          <Search />
        </div>
      </div>
    </form>
  )
}