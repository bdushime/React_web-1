import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">STADUM</div>
            <p className="text-gray-300 mb-4">
              Excellence in education, innovation in research, commitment to community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">LinkedIn</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Faculty Portal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Student Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">IT Help Desk</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">HR Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Facilities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 University Ave</p>
              <p>Education City, EC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@stadum.edu</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Stadum University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer