import React from "react";
import { CheckCircle, FileText, CreditCard, Info } from "lucide-react";

export default function MScAdmissionRequirements() {
  const academicRequirements = [
    "To be admitted to a Master of Science in Big Data Analytics degree at AUCA, an applicant is required to have a recognized degree in Computer Sciences, with at least a cumulative GPA of 2.4 on a 4 points scale or on 12/20 at undergraduate level offered by an accredited institution of higher learning in order to qualify for admission.",
    "Applicants from IT related studies, Mathematics, Statistics, Education with IT Major and Economics will be admitted upon completion of prerequisites if any.",
    "Applicants with foreign academic qualifications shall obtain an equivalence of their degree certificates from Rwanda High Education Council.",
    "An applicant can be accepted on transfer basis by transferring a maximum of 50% credits from accredited university offering MSc in Big Data Analytics, if those courses are equivalent to courses offered by AUCA.",
  ];

  const requiredDocs = [
    "A well filled in application form",
    "Official receipt of application fee payment (Frws 50,000 for Rwandan applicants and 50 USD for international applicants)",
    "Certified photocopies of college or university diplomas or degree certificates",
    "Two recent passport-size photos",
    "Three letters of recommendation from referees in sealed envelopes",
    "Two certified copies of the official transcript from each college/university attended (certified by the institution or Commissioner of Oath)",
    "Certified photocopy of secondary school certificate",
    "Updated curriculum vitae (CV)",
    "A proof/copy of health insurance certificate",
    "Essay (Explaining educational goals, career objectives, work experience, awards, and/or extracurricular activities)",
  ];

  const bankInfo = [
    "Equity Bank: 4003211197369 (FRWS)",
    "Bank of Kigali: 00040 – 00280275 -75 (FRWS)",
    "Bank of Kigali: 00040 – 00292172 – 41 (USD)",
    "Swift Code: BKIGRWRW | IBAN: 40000400029217241003",
  ];

  const notes = [
    "An entry Visa is granted upon arrival at the Kigali International Airport for all citizens from around the world.",
    "An international student will need to apply for a study visa within two weeks (15 days) upon arrival. To do this, he/she will produce the following documents to the Rwanda’s Immigration Services: a Police Clearance from the home country; a valid passport, a CV and an application letter.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
    
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          MSc in Information Technology
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Admission requirements for Master of Science in Big Data Analytics
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
     
        <section className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="flex items-center text-2xl font-semibold text-blue-800 mb-6">
            <CheckCircle className="w-7 h-7 mr-2 text-blue-600" />
            Academic Entry Requirements
          </h2>
          <ul className="space-y-4">
            {academicRequirements.map((req, i) => (
              <li
                key={i}
                className="flex items-start bg-blue-50 p-4 rounded-xl hover:shadow-md transition"
              >
                <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
                <p className="ml-3 text-gray-700">{req}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="flex items-center text-2xl font-semibold text-green-800 mb-6">
            <FileText className="w-7 h-7 mr-2 text-green-600" />
            Required Documents for Application
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {requiredDocs.map((doc, i) => (
              <li key={i} className="bg-green-50 p-3 rounded-lg hover:shadow">
                {doc}
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="flex items-center text-2xl font-semibold text-purple-800 mb-6">
            <CreditCard className="w-7 h-7 mr-2 text-purple-600" />
            Bank Information
          </h2>
          <ul className="space-y-3 text-gray-700">
            {bankInfo.map((bank, i) => (
              <li
                key={i}
                className="bg-purple-50 p-3 rounded-lg hover:shadow-md"
              >
                {bank}
              </li>
            ))}
          </ul>
        </section>

      
        <section className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="flex items-center text-2xl font-semibold text-orange-800 mb-6">
            <Info className="w-7 h-7 mr-2 text-orange-600" />
            Important Notes
          </h2>
          <ul className="space-y-3 text-gray-700">
            {notes.map((note, i) => (
              <li
                key={i}
                className="bg-orange-50 p-3 rounded-lg hover:shadow-md"
              >
                {note}
              </li>
            ))}
          </ul>
        </section>

       
        <div className="text-center text-gray-600 mt-10">
          <p className="font-semibold">Dr. Niyonzima Theogene</p>
          <p>Deputy Vice Chancellor Academics</p>
        </div>
      </div>
    </div>
  );
}
