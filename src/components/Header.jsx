import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Logo() {
  return (
    <a href="#" className="flex items-center">
      <div className="text-blue-700 font-bold text-xl md:text-2xl">
        <span className="text-blue-900">AUCA</span>
      </div>
      <div className="hidden md:block ml-2 text-xs text-gray-600">
        Adventist University
        <br />
        of Central Africa
      </div>
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
      name: "Academics",
      href: "#",
      submenu: [
        { name: "Programs", href: "/#programs" },
        { name: "Faculties", href: "/faculty" },
        { name: "Academic Calendar", href: "/#calendar" },
        { name: "News and Events", href: "/news-events" }
      ]
    },
    { name: "Admissions", href: "/admission" },
    { name: "Media Center", href: "/#campus-life" },
    { name: "Research", href: "/research" },
    { name: "AUCA Alumni", href: "http://64.23.201.128/" },
    { name: "Location", href: "https://maps.app.goo.gl/TrpLVRWtx6y6SibB9" }
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <Logo />

      
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              {/* Main link */}
              <HashLink smooth
                to={link.href}
                className="text-gray-800 hover:text-blue-700 font-medium flex items-center"
              >
                {link.name}
                {link.submenu && (
                  <span className="ml-1 text-sm">▼</span>
                )}
              </HashLink>

              {/* Submenu (shows on hover in desktop) */}
              {link.submenu && (
                <div className="absolute left-0 top-full pt-1 w-48 hidden group-hover:block">
                  <div className="bg-white rounded-md shadow-lg border">
                    {link.submenu.map((sublink) => (
                      <HashLink smooth
                        key={sublink.name}
                        to={sublink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 first:rounded-t-md last:rounded-b-md"
                      >
                        {sublink.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#apply"
            className="bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800"
          >
            Apply Now
          </a>
        </div>

        <button
          className="md:hidden text-gray-800 font-medium"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation - Only shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link, index) => (
              <div key={link.name}>
              
                <div
                  className="flex justify-between items-center py-3 text-gray-800 font-medium cursor-pointer border-b border-gray-100"
                  onClick={() => {
                    // If this link has a submenu, toggle it open/closed
                    if (link.submenu) {
                      setOpenDropdown(openDropdown === index ? null : index);
                    } else {
                      // If it's a regular link, close the mobile menu
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <span className="hover:text-blue-700">{link.name}</span>
                  {link.submenu && (
                    <span className="text-sm text-blue-700">
                      {openDropdown === index ? "▲" : "▼"}
                    </span>
                  )}
                </div>

                {/* Show submenu in mobile when openDropdown matches this index */}
                {link.submenu && openDropdown === index && (
                  <div className="ml-4 bg-gray-50 rounded-md mt-2 mb-2">
                    {link.submenu.map((sublink) => (
                      <a
                        key={sublink.name}
                        href={sublink.href}
                        className="block py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Apply Now Button */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href="#apply"
                className="block w-full bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}