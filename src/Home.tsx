import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="w-full m-auto bg-slate-300 h-screen flex justify-center items-center">
      <div className="flex flex-col text-center justify-center bg-white p-6 rounded-lg">
        <h1 className="text-2xl mb-2">Welcome back</h1>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
