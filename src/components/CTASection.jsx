
import { CalendarIcon, DownloadIcon, MailIcon } from 'lucide-react';
export function CTASection() {
  return <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Begin Your Journey with AUCA
          </h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto">
            Take the first step toward a transformative educational experience
            that prepares you for success and service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="#" className="flex flex-col items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg p-6 transition-colors duration-200">
            <CalendarIcon className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Apply Now</h3>
            <p className="text-center text-sm mb-4">September 2025 Intake</p>
            <span className="mt-auto inline-block py-2 px-4 bg-white text-blue-800 rounded font-medium">
              Start Application
            </span>
          </a>
          <a href="#" className="flex flex-col items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg p-6 transition-colors duration-200">
            <DownloadIcon className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Academic Bulletin</h3>
            <p className="text-center text-sm mb-4">
              Get detailed program information
            </p>
            <span className="mt-auto inline-block py-2 px-4 bg-white text-blue-800 rounded font-medium">
              Download PDF
            </span>
          </a>
          <a href="#" className="flex flex-col items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg p-6 transition-colors duration-200">
            <MailIcon className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Contact Admissions</h3>
            <p className="text-center text-sm mb-4">
              Get your questions answered
            </p>
            <span className="mt-auto inline-block py-2 px-4 bg-white text-blue-800 rounded font-medium">
              Reach Out
            </span>
          </a>
        </div>
      </div>
    </section>;
}