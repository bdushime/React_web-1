
export default function QuickLinks() {
  const links = [{
    title: 'Admissions',
    description: 'Application process and requirements',
    icon: "GraduationCap",
    href: '#admissions'
  }, {
    title: 'Programs',
    description: 'Undergraduate and postgraduate degrees',
    icon: "BookOpen",
    href: '#programs'
  }, {
    title: 'Campus Life',
    description: 'Student activities and facilities',
    icon: "Users",
    href: '#campus-life'
  }, {
    title: 'Events',
    description: 'Academic calendar and upcoming events',
    icon: "Calendar",
    href: '#events'
  }];
  return <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => <a key={index} href={link.href} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900 mb-1">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </div>
              </div>
            </a>)}
        </div>
      </div>
    </section>;
}