import Section from "../components/sessionManagement";
import React from "react";
import { MapPin, Calendar, Video, Phone, Cross } from "lucide-react";

const Service = () => {
  return (
    <Section id="service" title="">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-600 mb-2 tracking-wide">
          In His Loving Memory
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          Where We Gather to Remember
        </h2>
        <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="w-full">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-[600px]">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.234567890123!2d13.1!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc1b0000000000%3A0x0000000000000000!2sDemsa%2C%20Adamawa%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1635184945315!5m2!1sen!2sng"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={true}
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
                We invite you to join us in a solemn gathering as we come
                together to celebrate the life of our beloved Rev David Dari
                Dwam. Your presence would mean a great deal to us as we remember
                and honor the legacy of our beloved Husband, Father, Brother,
                Uncle and Pastor.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                In this moment of remembrance, let us come together to share our
                fond memories, offer our support to one another, and bid
                farewell to a truly exceptional individual.
              </p>
              <p className="text-gray-700 font-light leading-relaxed">
                Please join us in commemorating Rev David Dari Dwam's life and
                the positive impact he had on all of us.
              </p>
            </div>

            {/* Event Information */}
            <div className="space-y-6 pt-4">
              {/* ── Event 1: Songs of Service ── */}
              <div
                className="border-l-4 pl-4"
                style={{ borderColor: "#deac6c" }}
              >
                <p
                  className="font-semibold text-lg mb-3"
                  style={{ color: "#deac6c" }}
                >
                  Songs of Service
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: "#deac6c" }}
                    />
                    <div>
                      <p className="font-medium" style={{ color: "#deac6c" }}>
                        Location
                      </p>
                      <p className="text-gray-700 font-light">
                        365 Ojo Igbede Road,
                      </p>
                      <p className="text-gray-700 font-light">
                        Ajangbadi Ojo, Lagos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: "#deac6c" }}
                    />
                    <div>
                      <p className="font-medium" style={{ color: "#deac6c" }}>
                        Date/Time
                      </p>
                      <p className="text-gray-700 font-light">
                        Wed 15, April 2026
                      </p>
                      <p className="text-gray-700 font-light">4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Event 2: Final Burial Rite & Wake Keeping ── */}
              <div
                className="border-l-4 pl-4"
                style={{ borderColor: "#deac6c" }}
              >
                <p
                  className="font-semibold text-lg mb-3"
                  style={{ color: "#deac6c" }}
                >
                  Final Burial Rite & Wake Keeping
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: "#deac6c" }}
                    />
                    <div>
                      <p className="font-medium" style={{ color: "#deac6c" }}>
                        Burial Location
                      </p>
                      <p className="text-gray-700 font-light">Dwam Sakato, Demsa LGA</p>
                      <p className="text-gray-700 font-light">
                        Adamawa State, Nigeria
                      </p>
                    </div>
									
                  </div>
                  <div className="flex items-start gap-3">
<Cross	
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: "#deac6c" }}
                    />
										 <div>
                      <p className="font-medium" style={{ color: "#deac6c" }}>
                        Place of rest
                      </p>
                      <p className="text-gray-700 font-light"> Dakanta, Adamawa State </p>
                    
                    </div>
									</div>

                  <div className="flex items-start gap-3">
                    <Calendar
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: "#deac6c" }}
                    />
                    <div>
                      <p className="font-medium" style={{ color: "#deac6c" }}>
                        Date/Time
                      </p>
                      <p className="text-gray-700 font-light">
                       25 April 2026.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtual Event */}
              <div className="flex items-start gap-3">
                <Video
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: "#deac6c" }}
                />
                <div>
                  <p className="font-medium" style={{ color: "#deac6c" }}>
                    Join Virtually
                  </p>
                  <p className="text-gray-700 mb-2 font-light">
                    Unable to attend in person? Join us via live stream
                  </p>
                  <a
                    href="https://watch.obitus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#deac6c] hover:underline font-medium"
                  >
                    Click here to join live stream →
                  </a>
                </div>
              </div>

              {/* RSVP */}
              <div className="flex items-start gap-3">
                <Phone
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: "#deac6c" }}
                />
                <div>
                  <p className="font-medium" style={{ color: "#deac6c" }}>
                    RSVP
                  </p>
                  <p className="text-gray-700 font-light">
                    Please contact David Elino Amsami
                  </p>
                  <a
                    href="tel:08104796005"
                    className="text-[#deac6c] hover:underline font-medium"
                  >
                    08104796005
                  </a>
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
