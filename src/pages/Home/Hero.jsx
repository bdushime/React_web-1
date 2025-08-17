import React, { useState } from "react";

export default function Hero() {
 
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
     
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl text-white">
          {/* Current slide text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              {slides[currentSlide].subheading}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#admissions"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
            >
              Apply Now
              <span className="ml-1">→</span>
            </a>
            <a
              href="#programs"
              className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Programs
            </a>
          </div>

          {/* Dots Navigation */}
          <div className="flex space-x-3">
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

      {/* Slide Counter (optional - shows current slide) */}
      <div className="absolute bottom-4 right-4 z-10 bg-black/30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}