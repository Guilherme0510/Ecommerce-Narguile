import { useState } from "react";
import PropTypes from "prop-types"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faList, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { imagens } from "../assets/assets";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full sm:w-[15%] h-full sm:h-screen bg-orange-400 shadow-md flex flex-col">
      <div className="bg-white px-2 py-4 flex flex-col sm:flex-row justify-between items-center border-b border-orange-800">
        <div className="w-1/3 relative">
          <img
            src={imagens.adm}
            alt="Foto do Administrador"
            className="rounded-full border border-black cursor-pointer w-14 h-14 object-cover"
            onClick={toggleMenu}
          />
          {isOpen && (
            <div className="absolute top-full mt-2 bg-white shadow-md rounded-lg w-32">
              <button
                className="p-2 w-full text-center hover:bg-red-400 cursor-pointer hover:rounded-b-lg"
                onClick={logout}
              >
                Sair
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center sm:items-start mt-3 sm:mt-0 text-center sm:text-left">
          <p className="font-semibold">{user?.displayName || "Admin"}</p>
          <p className="text-sm text-gray-600">{user?.email || "admin@email.com"}</p>
        </div>
      </div>

      <nav className="flex sm:flex-col justify-center sm:items-start md:items-center gap-6 sm:h-5/6 p-4">
        <NavItem to="/add" icon={faArrowUpFromBracket} label="Adicionar" />
        <NavItem to="/lista" icon={faList} label="Produtos" />
        <NavItem to="/status" icon={faTruckFast} label="Status" />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <Link to={to} className="relative group">
    <div className="text-xl transition-transform duration-300 md:hover:bg-white bg-orange-200 p-5 rounded-xl">
      <FontAwesomeIcon icon={icon} />
    </div>
    <span className="text-xl italic absolute top-1/2 -right-12 transform translate-x-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </span>
  </Link>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default Navbar;
