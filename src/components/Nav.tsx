"use client";
import { useState } from "react";
import Link from "next/link";
import { RxCrossCircled, RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { IoCart } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";

const navItems = [
  {
    name: "Services",
    links: [
      "assessment",
      "cloud-adoption",
      "cyber-consulting",
      "physical-security",
      "professional-service",
      "realtime-monitoring",
      "security-services",
      "soc-services",
      "who-we-serve",
    ],
  },
  {
    name: "Solutions",
    links: [
      "cloud-security",
      "data-security",
      "email-security",
      "endpoint-security",
      "Identity-AccessM",
      "modernization",
      "secure-networking",
      "business-secHub",
    ],
  },
  {
    name: "AI",
    links: [
      "ai-PoweredBusiness",
      "ai-UseCases",
      "detection-response",
      "multiCloud-AI-Era",
      "protection-prevention",
      "roi-with-ai",
    ],
  },
  {
    name: "Company",
    links: [
      "about-Us",
      "blogs",
      "careers",
      "events",
      "FAQ",
      "partners",
      "leadership",
      "pay-here",
    ],
  },
  {
    name: "Contact",
    links: ["appointments", "contact-us"],
  },
];

const DropdownMenu = ({
  title,
  links,
  activeMenu,
  toggleDropdown,
}: {
  title: string;
  links: string[];
  activeMenu: string | null;
  toggleDropdown: (menu: string) => void;
}) => {
  return (
    <li className="relative">
      <button
        className="hover:text-pink-200 focus:outline-none text-lg"
        onClick={() => toggleDropdown(title)}
        aria-expanded={activeMenu === title}
      >
        {title}
      </button>

      {activeMenu === title && (
        <div className="absolute left-1/2 transform -translate-x-1/2 min-w-[300px] bg-white text-gray-900 shadow-lg p-4 rounded-lg z-20">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link}>
                <Link href={`/${link}`} className="block p-2 hover:bg-gray-200">
                  {link.replace("-", " ").toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) =>
    setActiveMenu(activeMenu === menu ? null : menu);

  return (
    <nav className="bg-pink-900 backdrop-blur-sm text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/IMG_4762.jpg/:/rs=w:142,h:94,cg:true,m/cr=w:142,h:94/qt=q:95"
            alt="Logo"
            className="h-10 w-auto rounded-md"
            width={64}
            height={92}
          />
          <Link href="/" className="text-2xl font-semibold">
            MarcViews
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-6 flex-1 justify-center">
            {navItems.map(({ name, links }) => (
              <DropdownMenu
                key={name}
                title={name}
                links={links}
                activeMenu={activeMenu}
                toggleDropdown={toggleDropdown}
              />
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            {/* Divider */}
            <div className="border-r border-white h-6"></div>

            {/* Icons Section */}
            <div className="flex space-x-3 mx-auto">
              <button className="hidden md:flex items-center justify-center w-10 h-10 border border-white bg-transparent rounded-md hover:bg-white hover:text-pink-900 transition">
                <IoCart size={32} />
              </button>
              <button className="hidden md:flex items-center justify-center w-10 h-10 border border-white bg-slate-600 rounded-md hover:bg-white hover:text-pink-900 transition">
                <MdAccountBox size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMobileMenu}>
          {isOpen ? (
            <RxCrossCircled size={28} />
          ) : (
            <RxHamburgerMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-gray-800 text-white absolute top-full left-0 py-4">
          {navItems.map(({ name, links }) => (
            <div key={name} className="border-b border-gray-600 pb-2 px-6">
              <button
                className="w-full text-left text-lg flex justify-between"
                onClick={() => toggleDropdown(name)}
              >
                {name}
                <span>{activeMenu === name ? "▲" : "▼"}</span>
              </button>
              {activeMenu === name && (
                <ul className="mt-2 space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        {link.replace("-", " ").toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
