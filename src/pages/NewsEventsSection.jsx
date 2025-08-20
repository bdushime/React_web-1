
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Footer from '../components/footer';
import Header from '../components/Header';

export default function NewsEventsSection() {
  const newsItems = [
    {
      title: 'AUCA Hosts International Education Conference',
      date: 'August 15, 2023',
      excerpt: 'Leading educators from around the world gathered to discuss innovations in higher education.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'New Technology Center Opens on Campus',
      date: 'July 28, 2023',
      excerpt: 'State-of-the-art facility will enhance learning experiences for IT and engineering students.',
      image: 'https://images.unsplash.com/photo-1581092335397-9fa341096fab?auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'AUCA Students Win National Business Competition',
      date: 'June 10, 2023',
      excerpt: 'Business administration students showcase innovation and entrepreneurship skills.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80'
    }
  ];

  const upcomingEvents = [
    {
      title: 'New Student Orientation',
      date: 'September 1, 2023',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium'
    },
    {
      title: 'Faculty Research Symposium',
      date: 'September 15, 2023',
      time: '10:00 AM - 3:00 PM',
      location: 'Science Building'
    },
    {
      title: 'Alumni Homecoming Weekend',
      date: 'October 20-22, 2023',
      time: 'All Day',
      location: 'Campus-wide'
    },
    {
      title: 'International Cultural Festival',
      date: 'November 5, 2023',
      time: '12:00 PM - 8:00 PM',
      location: 'University Park'
    }
  ];

  return (
    <>
    <Header />
        <section id="news-events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">News & Events</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings and upcoming events at AUCA.
          </p>
        </div>

        {/* News Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-blue-700 text-white px-3 py-1 m-3 rounded-md text-sm font-medium">
                  {item.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="text-blue-700 font-medium flex items-center">
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Calendar size={24} className="mr-2 text-blue-700" />
            Upcoming Events
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-blue-700 pl-4 py-2 rounded-r-lg">
                <h4 className="font-medium text-gray-900 mb-1 hover:text-blue-700">
                  {event.title}
                </h4>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <Calendar size={14} className="mr-1 text-blue-700" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <Clock size={14} className="mr-1 text-blue-700" />
                  <span>{event.time}</span>
                </div>
                <div className="text-gray-600 text-sm">{event.location}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center text-blue-700 font-medium border-b-2 border-blue-700 pb-1"
            >
              View All Events
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
<Footer />
    </>
  );
}
