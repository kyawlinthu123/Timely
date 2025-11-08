import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Timely</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Manage your academic life with ease. Track assignments, organize classes, and stay on top of deadlines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/dashboard"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/my_classes"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  My Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/assignments"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  Assignments
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@timely.com"
                  className="text-sm text-gray-400 transition-colors hover:text-green-500"
                >
                  support@timely.com
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="flex items-center justify-center text-gray-400 transition-all bg-gray-800 rounded-lg w-9 h-9 hover:bg-green-500 hover:text-white"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-gray-400 transition-all bg-gray-800 rounded-lg w-9 h-9 hover:bg-green-500 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-gray-400 transition-all bg-gray-800 rounded-lg w-9 h-9 hover:bg-green-500 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            © {currentYear} Timely. Created by{" "}
            <span className="font-medium text-green-500">Kyaw Lin Thu</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 transition-colors hover:text-green-500"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-400 transition-colors hover:text-green-500"
            >
              Terms
            </Link>
            <Link
              to="/cookies"
              className="text-sm text-gray-400 transition-colors hover:text-green-500"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}