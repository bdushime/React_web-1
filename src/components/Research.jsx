
import { ExternalLink } from 'lucide-react';
export function ResearchSection() {
  const researchAreas = [{
    title: 'Sustainable Development',
    description: 'Research focused on sustainable practices and development in Central Africa.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    title: 'Public Health',
    description: 'Studies addressing critical health challenges in the region.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    title: 'Information Technology',
    description: 'Innovations in technology and digital solutions for local challenges.',
    image: 'https://images.unsplash.com/photo-1581092921461-fd0e43f5e568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  return <section id="research" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Research & Innovation
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            AUCA is committed to advancing knowledge through research that
            addresses the needs of society and contributes to sustainable
            development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {researchAreas.map((area, index) => <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src={area.image} alt={area.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <a href="#" className="text-blue-700 font-medium hover:text-blue-800 flex items-center">
                  Learn more
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Research Partnerships
              </h3>
              <p className="text-gray-700 mb-6">
                AUCA collaborates with local and international institutions,
                government agencies, and industry partners to conduct impactful
                research that addresses regional challenges.
              </p>
              <h4 className="font-medium text-gray-800 mb-2">
                Our Partners Include:
              </h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Ministry of Education, Rwanda</li>
                <li>• Adventist Development and Relief Agency (ADRA)</li>
                <li>• Loma Linda University</li>
                <li>• University of Eastern Africa, Baraton</li>
                <li>• Rwanda Innovation Fund</li>
              </ul>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block">
                Explore Partnerships
              </a>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80" alt="Research collaboration" className="rounded-lg shadow-md w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}