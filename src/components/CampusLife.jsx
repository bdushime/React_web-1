import { Users, MapPin, Calendar, Coffee } from 'lucide-react';

export default function CampusLife(){
     const facilities = [
    {
      name: "Modern Library",
      description: "State-of-the-art library with digital resources and study spaces",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
    },
    {
      name: "Student Center",
      description: "Hub for student activities, dining, and social gatherings",
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
    },
    {
      name: "Sports Complex",
      description: "Complete athletic facilities including gym, courts, and fields",
      image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
    },
    {
      name: "Residence Halls",
      description: "Comfortable and safe accommodation for students",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
    }
  ];

  const organizations = [
    {
      icon: <Users className="w-8 h-8" />,
      name: "Student Government",
      description: "Leadership opportunities and campus representation"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      name: "Cultural Clubs",
      description: "Celebrate diversity through various cultural organizations"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      name: "Academic Societies",
      description: "Subject-specific organizations for academic excellence"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      name: "Community Service",
      description: "Make a difference through volunteer opportunities"
    }
  ];

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
    <section id="campus-life" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: '"Palatino Linotype", serif' }}>
            Campus Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: 'Arial, sans-serif' }}>
            Experience a vibrant campus community where learning extends beyond the classroom 
            through diverse activities, modern facilities, and meaningful connections.
          </p>
        </div>

        {/* Campus Facilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{ fontFamily: '"Palatino Linotype", serif' }}>
            Campus Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: '"Palatino Linotype", serif' }}>
                    {facility.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Organizations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12"
              style={{ fontFamily: '"Palatino Linotype", serif' }}>
            Student Organizations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizations.map((org, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {org.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: '"Palatino Linotype", serif' }}>
                  {org.name}
                </h4>
                <p className="text-gray-600 leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Events */}
        <div className="mb-16">
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6"
              style={{ fontFamily: '"Palatino Linotype", serif' }}>
            Be Part of Our Community
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
             style={{ fontFamily: 'Arial, sans-serif' }}>
            Join a vibrant community of learners, leaders, and lifelong friends. 
            Your AUCA experience extends far beyond academics.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Explore Student Life
          </button>
        </div>
      </div>
    </section>
  );
}