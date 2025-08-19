import React from 'react'

const UpcomingEvents = () => {
     const events = [
    {
      title: "Welcome Week",
      date: "September 2024",
      description: "Orientation activities for new students"
    },
    {
      title: "International Day",
      date: "October 2024",
      description: "Celebrating our diverse student community"
    },
    {
      title: "Academic Conference",
      date: "November 2024",
      description: "Annual research and academic excellence showcase"
    },
    {
      title: "Graduation Ceremony",
      date: "December 2024",
      description: "Celebrating the achievements of our graduates"
    }
  ];
  return (
    <div className="mb-16" id='programs'>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{ fontFamily: '"Palatino Linotype", serif' }}>
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: '"Palatino Linotype", serif' }}>
                    {event.title}
                  </h4>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default UpcomingEvents