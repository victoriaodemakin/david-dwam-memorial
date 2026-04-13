import React, { useState } from "react";
import Image from "next/image";

// Image imports
import techCare from "../../../public/assets/images/TestLogo.svg";
import overviewIcon from "../../../public/assets/images/home.svg";
import patientIcon from "../../../public/assets/images/info.svg";
import scheduleIcon from "../../../public/assets/images/calendar.svg";
import transactionIcon from "../../../public/assets/images/credit-card.svg";
import messagesIcon from "../../../public/assets/images/messages.svg";
import doctorImage from "../../../public/assets/images/senior-women.png"; // Replace with your actual doctor image
import settingIcon from "../../../public/assets/images/settings.png";
import dotsIcon from "../../../public/assets/images/dotIcon.svg";

const navItems = [
  { label: "Home" },
  { label: "Services" },
  { label: "Our Project"},
  { label: "Hire a Developer"},
  { label: "Contatc Us", },
];

const Header = () => {
  const [activeNav, setActiveNav] = useState("Patients");

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-20 px-4 py-3 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <Image
        src={techCare}
        alt="Tech Care Logo"
        width={160}
        className="object-contain"
      />

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center items-center gap-3 my-4 md:my-0 md:ml-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveNav(item.label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
              activeNav === item.label
                ? " bg-[#01F0D0] text-[#072635] font-semibold"
                : "hover:bg-[#01F0D0] hover:text-[#072635] font-semibold"
            }`}
          >
            {/* <Image src={item.icon} alt={`${item.label} Icon`} width={20} height={20} /> */}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={doctorImage}
              alt="Doctor Profile"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-[#072635]">Dr. Jose Simmons</span>
            <span className="text-gray-500 font-semibold">General Practitioner</span>
          </div>
        </div>
        <Image src={settingIcon} alt="Settings Icon" width={24} height={24} className="cursor-pointer" />
        <Image src={dotsIcon} alt="More Options Icon" width={4} height={4} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
