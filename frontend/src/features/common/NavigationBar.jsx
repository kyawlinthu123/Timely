import { Link, NavLink } from "react-router-dom";
import DemoProfile from "../../assets/images/DemoProfile.jpeg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-gray-200 border-1">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Timely</span>
          </Link>

          {/* Desktop Links */}
          <div className="items-center hidden gap-8 font-semibold md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/my_classes"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Classes
            </NavLink>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Calendar
            </NavLink>

            {/* Profile Picture */}
            <Link to="/profile">
              <div className="overflow-hidden transition border-2 border-gray-200 rounded-full w-9 h-9 hover:border-gray-300">
                <img
                  src={DemoProfile}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-white border-t border-gray-200 md:hidden">
          <div className="px-4 py-4 space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-gray-900 font-medium"
                  : "block text-gray-600 hover:text-gray-900"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/my_classes"
              className={({ isActive }) =>
                isActive
                  ? "block text-gray-900 font-medium"
                  : "block text-gray-600 hover:text-gray-900"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Classes
            </NavLink>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "block text-gray-900 font-medium"
                  : "block text-gray-600 hover:text-gray-900"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive
                  ? "block text-gray-900 font-medium"
                  : "block text-gray-600 hover:text-gray-900"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Calendar
            </NavLink>
            <Link
              to="/profile"
              className="flex items-center gap-2 pt-3 border-t border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="overflow-hidden border-2 border-gray-200 rounded-full w-9 h-9">
                <img
                  src={DemoProfile}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-gray-600">View Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}