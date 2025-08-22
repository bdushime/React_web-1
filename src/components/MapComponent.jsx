
import React from "react";
import "./MapComponent.css"; 

const MapComponent = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.140962667153!2d30.11466267598384!3d-1.955565398639778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd8f06cf9e8473%3A0x5c6f6891d7a4b41a!2sAdventist%20University%20of%20Central%20Africa!5e0!3m2!1sen!2srw!4v1692563689272!5m2!1sen!2srw";

  return (
    <div className="map-container">
      <h2 className="map-title">Location</h2>
      <div className="map-wrapper">
        <iframe
          src={mapSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AUCA Location"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
