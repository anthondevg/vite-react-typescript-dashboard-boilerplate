export default function SearchbarNavbar() {
  return (
    <div
      className="items-center justify-between xs:block  md:flex md:order-1 w-auto sm:w-92"
      id="navbar-main"
    >
      <div className="relative md:block w-64 md:w-72">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pl-10 text-md text-slate-50 border border-gray-300 hover:border-white checked:border-primary rounded-lg bg-zinc-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search courses"
        />
      </div>
    </div>
  );
}
