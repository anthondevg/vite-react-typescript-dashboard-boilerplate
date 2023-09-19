import "./App.css";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "./components/dashboard/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full bg-zinc-900">
        <Sidebar />
        <main className="pb-12 md:ml-64">
          <Navbar />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
