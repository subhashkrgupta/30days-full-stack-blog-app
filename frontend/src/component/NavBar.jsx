import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronRight, UserCircle2, ChevronDown } from "lucide-react";
import { getValidAccessToken } from "../utils/auth";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check auth state from localStorage
  useEffect(() => {
    const token = getValidAccessToken();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const sync = () => {
      const token = getValidAccessToken();
      setIsLoggedIn(!!token);
    };
    window.addEventListener("storage", sync);
    window.addEventListener("auth:changed", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("auth:changed", sync);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setUserMenuOpen(false);
    window.dispatchEvent(new Event("auth:changed"));
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md border-gray-800 shadow-lg py-2"
          : "bg-gray-900 border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-white tracking-tight flex items-center gap-1"
            onClick={() => setIsOpen(false)} // Logo pe click karne se bhi close hoga
          >
            MyBlog
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4 relative">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-indigo-500/20"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen((prev) => !prev)}
                    className="flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium focus:outline-none"
                  >
                    <UserCircle2 size={22} />
                    <ChevronDown size={16} />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 top-10 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 text-sm z-50">
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          navigate("/dashboard");
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-800"
                      >
                        My Posts
                      </button>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          navigate("/settings");
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-800"
                      >
                        Settings
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-red-500/20"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 absolute w-full left-0 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                // Yahan onClick handler add kiya hai
                onClick={() => setIsOpen(false)} 
                className={({ isActive }) =>
                  `block text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-600/10 text-indigo-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="h-px bg-gray-800 my-4 mx-4"></div>
            
            <div className="flex flex-col gap-3 px-4">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)} // Login pe click karte hi menu band
                    className="w-full text-center text-gray-300 hover:text-white font-medium py-2"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)} // Register pe click karte hi menu band
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    Get Started <ChevronRight size={16} />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="w-full text-center text-gray-300 hover:text-white font-medium py-2"
                    onClick={() => setIsOpen(false)} // Dashboard pe click karte hi menu band
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;