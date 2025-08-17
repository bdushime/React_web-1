import React, { useEffect, useState } from "react";

export default function Hero() {
 
  const [currentSlide, setCurrentSlide] = useState(0);

 
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2070&q=80",
      heading: "Shape Your Future at Adventist University of Central Africa",
      subheading:
        "Join a community dedicated to academic excellence, spiritual growth, and service to humanity."
    },
    {
      image:
        "https://encyclosource.com/link/api/v1/image/ESDA/EAQQ/EAQQL.jpg",
      heading: "Discover Your Potential",
      subheading:
        "World-class facilities and dedicated faculty to help you excel in your chosen field."
    },
    {
      image:
        "https://assets.weforum.org/article/image/responsive_big_webp_pvHwd-UDSSKJlYUP8ic24kGrlqfMaCSlTFQljAb4zjY.webp",
      heading: "Faith, Learning, Service",
      subheading:
        "Experience education that transforms your mind, heart, and hands."
    }
  ];

  useEffect(() => {
    setIsLoaded(true); 
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
     
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        >
          <img
            src={slide.image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>
      ))}

     
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl text-white">
          
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                currentSlide === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
                  isLoaded ? "animate-fade-in" : ""
                }`}
              >
                {slide.heading}
              </h1>
              <p
                className={`text-lg md:text-xl mb-8 text-white/90 ${
                  isLoaded ? "animate-fade-in-delay" : ""
                }`}
              >
                {slide.subheading}
              </p>
            </div>
          ))}

          <div
            className={`flex flex-wrap gap-4 ${
              isLoaded ? "animate-fade-in-delay-2" : ""
            }`}
          >
            <a
              href="#admissions"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
            >
              Apply Now
              <span className="ml-1">{">"}</span>
            </a>
            <a
              href="#programs"
              className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Programs
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
