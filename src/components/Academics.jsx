import { GraduationCap, Book, Users, Calendar } from 'react-icons/lu';

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
      icon: <Calendar className="w-8 h-8" />,
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
    <section id="academics" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
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

        {/* Programs */}
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

        {/* Faculties */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{ fontFamily: '"Palatino Linotype", serif' }}>
            Our Faculties
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculties.map((faculty, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 animate-slideUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3"
                    style={{ fontFamily: '"Palatino Linotype", serif' }}>
                  {faculty.name}
                </h4>
                <div className="space-y-2 text-sm text-gray-600"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                  <p><span className="font-semibold">Dean:</span> {faculty.dean}</p>
                  <p><span className="font-semibold">Departments:</span> {faculty.departments}</p>
                  <p><span className="font-semibold">Students:</span> {faculty.students}+</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white animate-fadeIn">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4"
                style={{ fontFamily: '"Palatino Linotype", serif' }}>
              Academic Calendar 2024-2025
            </h3>
            <p className="text-blue-100 text-lg"
               style={{ fontFamily: 'Arial, sans-serif' }}>
              Important dates and deadlines for the academic year
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Semester 1", start: "September 2024", end: "December 2024", exams: "January 2025" },
              { title: "Semester 2", start: "February 2025", end: "May 2025", exams: "June 2025" },
              { title: "Summer Session", start: "July 2025", end: "August 2025", exams: "Intensive Programs" }
            ].map((sem, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                <h4 className="text-xl font-bold mb-4">{sem.title}</h4>
                <div className="space-y-2 text-blue-100">
                  <p>Start: {sem.start}</p>
                  <p>End: {sem.end}</p>
                  <p>Exams: {sem.exams}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
