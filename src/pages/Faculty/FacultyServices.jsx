import React from 'react'
import { Award, Computer, Users, BookOpen } from 'lucide-react';

const FacultyServices = () => {
  const services = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Grants & Funding",
      description: "Find information about applying for grants, research funding opportunities, and financial support for academic projects."
    },
    {
      icon: <Computer className="w-8 h-8 text-blue-600" />,
      title: "Technology Integration", 
      description: "Resources for infusing technology into your curriculum, online learning tools, and digital classroom solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Student Accommodations",
      description: "Support for fulfilling accommodation requests for students with disabilities and inclusive learning practices."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Academic Programs",
      description: "Leadership and resources for academic programs, curriculum development, and educational excellence."
    }
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Faculty Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The provost's office supports Stadum's academic mission. We provide leadership and resources for programs, faculty, and students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FacultyServices;