import React, { useEffect, useRef, useState } from 'react';
import { AnimatedCounter } from './AnimatedCounter';

 const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const watcher = new IntersectionObserver(
      (items) => {
        if (items[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const section = sectionRef.current;
    if (section) {
      watcher.observe(section);
    }
    return () => {
      if (section) {
        watcher.unobserve(section);
      }
    };
  }, []);

  const stats = [
    { value: 1978, label: 'Year Founded', prefix: '', suffix: '' },
    { value: 5000, label: 'Students', prefix: '', suffix: '+' },
    { value: 200, label: 'Faculty Members', prefix: '', suffix: '+' },
    { value: 25, label: 'Degree Programs', prefix: '', suffix: '+' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About AUCA</h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              The Adventist University of Central Africa is committed to providing quality
              Christian education that develops individuals who are spiritually mature,
              intellectually competent, socially responsible, and physically healthy.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be a center of excellence in education that transforms students into
              competent professionals, ethical leaders, and responsible citizens guided by
              Christian values.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow hover:bg-blue-100 cursor-default"
                >
                  <h4 className="font-bold text-xl text-blue-900 mb-2">
                    <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </h4>
                  <p className="text-gray-700 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="AUCA Campus"
              className="rounded-lg shadow-lg w-full h-auto object-cover hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block transform transition-transform hover:scale-105 duration-300">
              <p className="font-medium italic">
                "Educating for Eternity: Knowledge, Faith, Service"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;