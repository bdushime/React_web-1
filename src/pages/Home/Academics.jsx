import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import { GraduationCap, Book, Users, Calendar as CalenderIcon } from 'lucide-react';
const Academics = () => {
  const programs = [
        {
      category: "Business & Economics",
      icon: <GraduationCap className="w-8 h-8" />,
      programs: ["Business Administration", "Economics", "Accounting", "Marketing", "International Business"]
    },
    {
      category: "Health Sciences",
      icon: <Book className="w-8 h-8" />,
      programs: ["Medicine", "Nursing", "Public Health", "Medical Laboratory Sciences", "Pharmacy"]
    },
    {
      category: "Education",
      icon: <Users className="w-8 h-8" />,
      programs: ["Education Administration", "Curriculum & Instruction", "Educational Psychology", "Early Childhood Education"]
    },
    {
      category: "Theology & Religious Studies",
      icon: <CalenderIcon className="w-8 h-8" />,
      programs: ["Theology", "Pastoral Ministry", "Biblical Studies", "Church Leadership", "Religious Education"]
    }
  ];

  const faculties = [
    { name: "Faculty of Business", dean: "Dr. Sarah Johnson", departments: 5, students: 1200 },
    { name: "Faculty of Health Sciences", dean: "Prof. Michael Brown", departments: 7, students: 1500 },
    { name: "Faculty of Education", dean: "Dr. Emily Davis", departments: 4, students: 800 },
    { name: "Faculty of Theology", dean: "Rev. Dr. James Wilson", departments: 3, students: 600 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="admissions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
              style={{ fontFamily: '"Palatino Linotype", serif' }}>
            Academic Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: 'Arial, sans-serif' }}>
            Discover our comprehensive range of undergraduate and graduate programs 
            designed to prepare you for success in your chosen field.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {programs.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-transparent hover:border-blue-400 animate-slideUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
                  {category.icon}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900"
                    style={{ fontFamily: '"Palatino Linotype", serif' }}>
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3">
                {category.programs.map((program, programIndex) => (
                  <div key={programIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium"
                          style={{ fontFamily: 'Arial, sans-serif' }}>
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       
          <Calendar />
        

      </div>
    </section>
  );
};

export default Academics;
