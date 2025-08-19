const ResourceCategories = () => {
  const categories = [
    {
      title: "Facilities & Resources",
      description: "Book a space for your meeting, submit a maintenance request, set up your Lesley ID card—find all the resources and services you need to excel in your day-to-day work.",
      items: ["Room Booking", "Maintenance Requests", "ID Card Services", "Parking Permits"]
    },
    {
      title: "Information Technology",
      description: "Having computer issues? Want to reserve equipment for an upcoming event? Whether you need help troubleshooting or some expert advice, our IT team is here to help.",
      items: ["Tech Support", "Equipment Reservation", "Software Licenses", "Network Access"]
    },
    {
      title: "Human Resources",
      description: "From perks to professional development, the Human Resources Office is your go-to for details about benefits, compensation, holiday schedules, and more.",
      items: ["Benefits Information", "Professional Development", "Holiday Schedules", "Compensation Details"]
    }
  ];
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Resource Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to support your academic work and professional development.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ResourceCategories;