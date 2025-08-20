import React, { useState } from "react";
import { GraduationCapIcon, BookOpenIcon, AwardIcon } from "lucide-react";
import { requirementsData } from "../Home/requirementsData";
import Header from "../../components/Header";
import Footer from "../../components/footer";

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("undergraduate");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = {
    undergraduate: [
      "Theology",
      "BSc Nursing",
      "BSc Midwifery",
      "BBA Accounting",
      "BBA Management",
      "BBA Finance",
      "BBA Marketing",
      "BSc Information Management",
      "BSc Networks & Communications",
      "BSc Software Engineering",
      "BA Education (various disciplines)"
    ],
    graduate: [
      "MSc Big Data Analytics",
      "MBA - Accounting",
      "MBA - Finance",
      "MBA - Human Resource Management",
      "MBA - Management",
      "MBA - Project Management",
      "MA Education - Educational Administration",
      "MA Education - Curriculum & Supervision"
    ],
    certifications: [
      "Certified Ethical Hacker (CEH)",
      "Cisco Certified Network Associate (CCNA)",
      "Computer Hacking Forensic Investigator (CHFI)",
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Information Security Manager (CISM)",
      "Linux Professional Institute Certification (LPIC-1)",
      "Certified Public Accountant (CPA)",
      "Statistical Package for Social Sciences (SPSS)",
      "Early Childhood Education",
      "Teaching Methodology"
    ]
  };

  const tabIcons = {
    undergraduate: <GraduationCapIcon className="w-5 h-5" />,
    graduate: <BookOpenIcon className="w-5 h-5" />,
    certifications: <AwardIcon className="w-5 h-5" />
  };

  const tabLabels = {
    undergraduate: "Undergraduate Degrees",
    graduate: "Graduate Degrees",
    certifications: "Professional Certifications"
  };

  return (
    <>
  
        <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academic Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AUCA offers a diverse range of academic programs designed to prepare
            students for impactful careers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
          {Object.keys(programs).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedProgram(null); // reset when changing tab
              }}
              className={`flex items-center px-6 py-3 font-medium text-sm md:text-base transition-colors duration-200 ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="mr-2">{tabIcons[tab]}</span>
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        {!selectedProgram ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs[activeTab].map((program, index) => (
              <div
                key={index}
                onClick={() => setSelectedProgram(program)}
                className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:shadow-md cursor-pointer transition-shadow duration-200"
              >
                <p className="font-medium text-gray-800">{program}</p>
              </div>
            ))}
          </div>
        ) : (
          <RequirementsSection
            program={selectedProgram}
            category={activeTab}
            onBack={() => setSelectedProgram(null)}
          />
        )}
      </div>
    </section>
    
    </>
    
  );
}

// Requirements Display Component
function RequirementsSection({ program, category, onBack }) {
  const data = requirementsData[category]?.[program];

  if (!data) {
    return (
      <div className="text-center">
        <p className="text-gray-600">No requirements available for {program}.</p>
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 mt-8">
      <button
        onClick={onBack}
        className="mb-6 text-blue-600 hover:underline font-medium"
      >
        ← Back to Programs
      </button>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{program}</h3>

      {data.academic && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-700">
            Academic Requirements
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
            {data.academic.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      )}

      {data.documents && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-green-700">
            Required Documents
          </h4>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 mt-2">
            {data.documents.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>
      )}

      {data.bank && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-purple-700">
            Bank Information
          </h4>
          <ul className="space-y-2 text-gray-700 mt-2">
            {data.bank.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}

      {data.notes && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-orange-700">Notes</h4>
          <ul className="space-y-2 text-gray-700 mt-2">
            {data.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}

      {data.contact && (
        <div className="text-center text-gray-600 mt-8">
          <p className="font-semibold">{data.contact.name}</p>
          <p>{data.contact.title}</p>
        </div>
      )}
    </div>
  );
}
