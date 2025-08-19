import React, { useState } from 'react';
import { GraduationCapIcon, BookOpenIcon, AwardIcon } from 'lucide-react';
export default function Academics() {
  const [activeTab, setActiveTab] = useState('undergraduate');
  const programs = {
    undergraduate: ['Theology', 'BSc Nursing', 'BSc Midwifery', 'BBA Accounting', 'BBA Management', 'BBA Finance', 'BBA Marketing', 'BSc Information Management', 'BSc Networks & Communications', 'BSc Software Engineering', 'BA Education (various disciplines)'],
    graduate: ['MSc Big Data Analytics', 'MBA - Accounting', 'MBA - Finance', 'MBA - Human Resource Management', 'MBA - Management', 'MBA - Project Management', 'MA Education - Educational Administration', 'MA Education - Curriculum & Supervision'],
    certifications: ['Certified Ethical Hacker (CEH)', 'Cisco Certified Network Associate (CCNA)', 'Computer Hacking Forensic Investigator (CHFI)', 'Certified Information Systems Security Professional (CISSP)', 'Certified Information Security Manager (CISM)', 'Linux Professional Institute Certification (LPIC-1)', 'Certified Public Accountant (CPA)', 'Statistical Package for Social Sciences (SPSS)', 'Early Childhood Education', 'Teaching Methodology']
  };
  const tabIcons = {
    undergraduate: <GraduationCapIcon className="w-5 h-5" />,
    graduate: <BookOpenIcon className="w-5 h-5" />,
    certifications: <AwardIcon className="w-5 h-5" />
  };
  const tabLabels = {
    undergraduate: 'Undergraduate Degrees',
    graduate: 'Graduate Degrees',
    certifications: 'Professional Certifications'
  };
  return <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academic Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AUCA offers a diverse range of academic programs designed to prepare
            students for impactful careers.
          </p>
        </div>
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
          {Object.keys(programs).map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`flex items-center px-6 py-3 font-medium text-sm md:text-base transition-colors duration-200 ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} aria-selected={activeTab === tab} role="tab">
              <span className="mr-2">{tabIcons[tab]}</span>
              {tabLabels[tab]}
            </button>)}
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs[activeTab].map((program, index) => <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <p className="font-medium text-gray-800">{program}</p>
              </div>)}
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View complete academic bulletin
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
}
