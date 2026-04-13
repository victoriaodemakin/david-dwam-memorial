import Section from "../components/sessionManagement";
import React, { useState } from "react";
import { MapPin, Calendar, Video, Users, Phone } from "lucide-react";

const Service = () => {


  return (
    <Section id="service" title="">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-600 mb-2 tracking-wide">In His Loving Memory</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Where We Gather to Remember</h2>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="w-full">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8364187742547!2d0.033662676570755414!3d51.53227200763697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7f0d5f3b5f5%3A0x4f6b9c9c9c9c9c9c!2sEast%20London%20Crematorium!5e0!3m2!1sen!2suk!4v1635184945315!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen= {true}
                loading="lazy"
                title="Service Location Map"
              ></iframe>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="w-full space-y-6">
            <div className="space-y-6">
              <p className="text-gray-700 font-light leading-relaxed">
                Please join us to pay a last tribute.
              </p>

              <p className="text-gray-700 font-light leading-relaxed">
                We invite you to join us in a solemn gathering as we come together to celebrate the life of our beloved Olaseni Babatunde Olagbaju .                 Your presence would mean a great deal to us as we remember and honor the legacy of a remarkable friend, husband, father, grandfather.

              </p>

              <p className="text-gray-700 font-light leading-relaxed">
                In this moment of remembrance, let us come together to share our fond memories, offer our support to one another, and bid farewell to a truly exceptional individual.
              </p>

              <p className="text-gray-700 font-light leading-relaxed">
                Please join us in commemorating Olaseni's life and the positive impact he had on all of us.
              </p>
            </div>

            {/* Event Information */}
            <div className="space-y-4 pt-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#deac6c' }} />
                <div>
                  <p className="font-medium" style={{ color: '#deac6c' }}>Location</p>
                  <p className="text-gray-700 font-light">East London Crematorium</p>
                  <p className="text-gray-700 font-light">Grange Road, Plaistow</p>
                  <p className="text-gray-700 font-light">Newham, London E13 0HB</p>
                </div>
              </div>

              {/* Date/Time */}
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#deac6c' }} />
                <div>
                  <p className="font-medium" style={{ color: '#deac6c' }}>Date/Time</p>
                  <p className="text-gray-700 font-light">November 27, 2025</p>
                  <p className="text-gray-700 font-light">11:00 AM</p>
                </div>
              </div>

              {/* Virtual Event */}
            {/* Virtual Event */}
<div className="flex items-start gap-3">
  <Video className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#deac6c' }} />
  <div>
    <p className="font-medium" style={{ color: '#deac6c' }}>Join Virtually</p>
    <p className="text-gray-700 mb-2 font-light">Unable to attend in person? Join us via live stream</p>
    <a 
      href="https://watch.obitus.com" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#deac6c] hover:underline font-medium"
    >
      Click here to join live stream →
    </a>
    <div className="mt-3 space-y-1">
      <p className="text-gray-700 font-light"><span className="font-medium">Username:</span> taya4578</p>
      <p className="text-gray-700 font-light"><span className="font-medium">Pin:</span> 264335</p>
      <p className="text-gray-600 text-sm italic mt-2">Please be patient as the stream loads. Live streaming will start at 10:56 AM.</p>
    </div>
  </div>
</div>

              {/* RSVP Contact */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#deac6c' }} />
                <div>
                  <p className="font-medium" style={{ color: '#deac6c' }}>RSVP</p>
                  <p className="text-gray-700 font-light">Please contact Joseph Olagbaju</p>
                  <a href="tel:07770056250" className="text-[#deac6c] hover:underline font-medium">07770 056250</a>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;