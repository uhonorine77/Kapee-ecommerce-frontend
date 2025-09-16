import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { IoMdClose } from "react-icons/io";
// import { IoBookmarksOutline } from "react-icons/io5";
// import { HiSquare2Stack } from "react-icons/hi2";
// import { CiMail } from "react-icons/ci";
// import { FaChevronDown, FaDollarSign } from "react-icons/fa";
import { useAuth } from "../AuthContext"; // Import the hook

const NavbarPage: React.FC = () => {
  const [model, setModel] = useState<boolean>(false);
  // const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);
  // const [currencyDropdown, setCurrencyDropdown] = useState<boolean>(false);
  
  const { isLoggedIn, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleOpenModel = () => setModel(true);
  const handleCloseModel = () => setModel(false);

  const handleLogoutClick = () => {
    logout();
    navigate('/home');
  };

  return (
    <>
      {model && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Welcome Back</h2>
              <IoMdClose
                onClick={handleCloseModel}
                className="cursor-pointer text-gray-500 hover:text-gray-700 text-xl transition-colors"
              />
            </div>
            {/* Note: The onLogin prop is no longer needed here */}
            <LoginForm onClose={handleCloseModel} /> 
          </div>
        </div>
      )}

      <nav className="bg-yellow-400 h-12">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-6">
              {/* Language and Currency selectors */}
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-800 text-sm font-medium uppercase tracking-wide">
                WELCOME TO OUR STORE!
              </span>
              <Link to="/Blogs" /* ... */>BLOG</Link>
              <Link to="/FAQ" /* ... */>FAQ</Link>
              <Link to="/Contact" /* ... */>CONTACT US</Link>

              {/* CORRECTED: Conditionally render LOGIN or LOGOUT button */}
              {isLoggedIn ? (
                <button
                  onClick={handleLogoutClick}
                  className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  LOGOUT
                </button>
              ) : (
                <button
                  onClick={handleOpenModel}
                  className="text-gray-800 hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  LOGIN
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPage;