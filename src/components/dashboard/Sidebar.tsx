import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed bottom-0 z-40 w-screen transition-transform md:top-0 md:left-0 md:w-64 md:h-screen md:translate-x-0 "
      aria-label="Sidebar"
    >
      <div className="h-full md:px-3 md:py-4 py-2 overflow-y-auto text-white bg-zinc-900 md:border-t-0 border-t md:bg-stone-950 border-r-zinc-200">
        <a
          href="https://nomad.com"
          className="hidden md:block items-center pl-2.5 mb-5"
        >
          <span className="self-center  text-xl text-success font-semibold whitespace-nowrap dark:text-white">
            Nomad APP
          </span>
        </a>
        <ul className="md:block md:space-y-2 font-medium flex align-middle  items-center justify-center">
          <SidebarItem
            route={"home"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            }
          >
            Inicio
          </SidebarItem>

          <SidebarItem
            route={"profile"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          >
            Perfil
          </SidebarItem>

          <SidebarItem
            route={"cart"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            }
          >
            Carrito
          </SidebarItem>
        </ul>
      </div>
    </aside>
  );
}
