import React, { useState, useEffect } from "react";

 function Logo() {
  return <a href="#" className="flex items-center">
      <div className="text-blue-700 font-bold text-xl md:text-2xl">
        <span className="text-blue-900">AUCA</span>
      </div>
      <div className="hidden md:block ml-2 text-xs text-gray-600">
        Adventist University
        <br />
        of Central Africa
      </div>
    </a>
}


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isScrolled, setIsScrolled] = useState(false); // Scroll detection

  // Track which dropdown is open (for mobile view)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Detect scrolling to change header style
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links (some have a submenu)
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    {
      name: "Academics",
      href: "#academics",
      submenu: [
        { name: "Programs", href: "#programs" },
        { name: "Faculties", href: "#faculties" },
        { name: "Academic Calendar", href: "#calendar" }
      ]
    },
    { name: "Admissions", href: "#admissions" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              {/* Main link */}
              <a
                href={link.href}
                className="text-gray-800 hover:text-blue-700 font-medium transition-colors flex items-center"
              >
                {link.name}
                {link.submenu && (
                  <span className="ml-1 text-sm">▼</span> // Small dropdown arrow
                )}
              </a>

              {/* Submenu (visible on hover in desktop) */}
              {link.submenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {link.submenu.map((sublink) => (
                    <a
                      key={sublink.name}
                      href={sublink.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {sublink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Apply Button */}
        <div className="hidden md:block">
          <a
            href="#apply"
            className="bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {/* Main mobile link */}
                <div
                  className="flex justify-between items-center py-2 text-gray-800 font-medium cursor-pointer"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <span>{link.name}</span>
                  {link.submenu && (
                    <span className="text-sm">{openDropdown === index ? "▲" : "▼"}</span>
                  )}
                </div>

                {/* Show submenu in mobile when clicked */}
                {link.submenu && openDropdown === index && (
                  <div className="ml-4">
                    {link.submenu.map((sublink) => (
                      <a
                        key={sublink.name}
                        href={sublink.href}
                        className="block py-1 text-gray-700 hover:text-blue-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Apply Now */}
            <div className="mt-4 mb-2">
              <a
                href="#apply"
                className="block w-full bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors text-center"
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
