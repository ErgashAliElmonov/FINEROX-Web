import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import "./style.css";

export function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
}
