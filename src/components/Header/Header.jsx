import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-box">
        <nav className="navbar">
          <Link to="/">
            <img src="/assets/logo.png" alt="" height={"60"} />
          </Link>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/about"
              >
                Biz haqimizda
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/servise"
              >
                Xizmatlar
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/portifolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/contact"
              >
                Bog'lanish
              </NavLink>
            </li>
            <li style={{ color: "gray" }}>Tel: +998 (88) 118 05 07</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export { Header };
