import { Link } from "react-router-dom";

const SidebarItem = ({ children, route, icon }: any) => {
  return (
    <li>
      <Link
        className="flex items-center p-2 md:mx-0 px-4 mx-5 md:px-2 text-xl rounded-lg hover:text-zinc-50 dark:text-white hover:bg-zinc-800 dark:hover:bg-gray-700 group"
        to={`/dashboard/${route === "home" ? "" : route}`}
      >
        {icon}
        <span className="pl-3 hidden md:block">{children}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
