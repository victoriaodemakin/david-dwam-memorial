import Section from "../components/sessionManagement";
import React from "react";
import { MessageCircle, Book, Film, Plane, Palette, Info } from "lucide-react";

const Favorites = () => (
  <Section id="favorites" title="">
			 {/* Legacy Section */}
      <div className="text-center mb-4">
<p className="text-sm text-gray-600 mb-2 tracking-wide">Echoes of Joy</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">The Light He Left Behind</h2>


          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>

      </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">

      {/* Favorite Saying */}
      <div className="p-4 font-light">
        <div className="flex items-center ">
          <MessageCircle size={20} style={{ color: '#deac6c' }} />
          <h3 className="font-medium text-base" style={{ color: '#deac6c' }}>
            What was Rev David Dari Dwam's favorite Saying?
          </h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          "It is well with the righteous."<br />
        </p>
      </div>

      {/* Favorite Book */}
      <div className="p-4 font-light">
        <div className="flex items-center ">
          <Book size={20} style={{ color: '#deac6c' }} />
          <h3 className="font-medium text-base" style={{ color: '#deac6c' }}>
            What was Rev David Dari Dwam's favorite Book?
          </h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
The Bible        </p>
      </div>

      {/* Favorite Movie */}
      <div className="p-4 font-light">
        <div className="flex items-center gap-2">
          <Film size={20} style={{ color: '#deac6c' }} />
          <h3 className="font-medium text-base" style={{ color: '#deac6c' }}>
            What was Rev David's favorite Bible Verse?
          </h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
					John 1:1-5       </p>
      </div>

      {/* Favorite Travel Destination */}
      <div className="p-4 font-light">
        <div className="flex items-center gap-2 mb-3">
          <Plane size={20} style={{ color: '#deac6c' }} />
          <h3 className="font-medium text-base" style={{ color: '#deac6c' }}>
            What was Rev David Dari Dwam's favorite song?
          </h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
Grace is your faithfulness        </p>
      </div>


      {/* Fun Fact */}
      <div className="p- font-light">
        <div className="flex items-center gap-2 mb-3">
          <Info size={20} style={{ color: '#deac6c' }} />
          <h3 className="font-medium text-base" style={{ color: '#deac6c' }}>
            Fun fact about Rev David Dari Dwam:
          </h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed ">
He loved to cook!        </p>
      </div>
    </div>
  </Section>
);

export default Favorites;