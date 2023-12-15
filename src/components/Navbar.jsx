import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 w-4/5 mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/allPost">All Post</Link>
            </li>
            <li>
              <Link to="/lk">404</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
