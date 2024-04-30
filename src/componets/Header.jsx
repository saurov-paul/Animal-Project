import { NavLink } from "react-router-dom";

const Header =() => {
  return (
    <header>
    <h1>Zoo App</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/animals">Animals</NavLink>
        </li>
        <li>
          <NavLink to="/birds">Birds</NavLink>
        </li>
      </ul>
    </nav>
    </header>
  )
};

export default Header;