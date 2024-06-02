import { Outlet } from "react-router-dom";
import Header from "../layout/header";
export default function Main() {
  return (
    <div className="w-screen h-screen transition-colors duration-200 bg-white text-zinc-600 dark:bg-zinc-900 ">
      <Header />
      <Outlet />
    </div>
  );
}
