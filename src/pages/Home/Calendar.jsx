import React from 'react'

const Calendar = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="calendar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white animate-fadeIn" >
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
    )
}

export default Calendar