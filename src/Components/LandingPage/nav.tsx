import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";


const Nav = () => {
  return (
    <div className="border-b border-[#e1e1e1]">
      <div className="mx-5 md:mx-10 py-5">
        <div className="flex items-center justify-between">
          <Link to='/'><img src="/Images/logo.svg" alt="Logo" className="md:w-40 w-32" /></Link>

          <div className="md:flex gap-10 hidden">
            <button className="">About</button>
            <button>FAQ</button>
            <button>Privacy</button>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/signin">
              <button className="bg-green text-white px-4 py-2 rounded-md">
                Sign in
              </button>
            </Link>
            <div className="md:hidden">
              <FontAwesomeIcon icon={faBarsStaggered} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
