import React from 'react'
import { BookOpen, Calendar, Computer, Users, Award } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { title: "Faculty Handbook", icon: <BookOpen className="w-5 h-5" />, url: "#" },
    { title: "Academic Calendar", icon: <Calendar className="w-5 h-5" />, url: "#" },
    { title: "IT Support", icon: <Computer className="w-5 h-5" />, url: "#" },
    { title: "HR Portal", icon: <Users className="w-5 h-5" />, url: "#" },
    { title: "Research Grants", icon: <Award className="w-5 h-5" />, url: "#" },
    { title: "Course Management", icon: <BookOpen className="w-5 h-5" />, url: "#" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Quick Links</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fast access to the most frequently used faculty resources and tools.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:shadow-md hover:border-blue-300 transition duration-300 group"
            >
              <div className="text-blue-600 group-hover:text-blue-700 mb-3 flex justify-center">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                {link.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default QuickLinks