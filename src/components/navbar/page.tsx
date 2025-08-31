"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Academics",
      children: [
        { label: "Curriculum", href: "/academics/curriculum" },
        { label: "Faculty", href: "/academics/faculty" },
      ],
    },
    {
      label: "About Us",
      children: [
        { label: "Our Story", href: "/about/story" },
        { label: "Vision & Mission", href: "/about/vision" },
      ],
    },
    {
      label: "Admissions",
      children: [
        { label: "Process", href: "/admissions/process" },
        { label: "Apply Now", href: "/admissions/apply" },
      ],
    },
    {
      label: "Notice Board",
      children: [
        { label: "Announcements", href: "/notices/announcements" },
        { label: "Events", href: "/notices/events" },
      ],
    },
    {
      label: "Contact Us",
      children: [
        { label: "Reach Us", href: "/contact" },
        { label: "Support", href: "/contact/support" },
      ],
    },
    {
      label: "School",
      children: [
        { label: "Clubs", href: "/school/clubs" },
        { label: "Activities", href: "/school/activities" },
      ],
    },
    {
      label: "Infrastructure",
      children: [
        { label: "Library", href: "/infra/library" },
        { label: "Sports", href: "/infra/sports" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#a40d2e] to-[#c0392b] text-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/logo-png-e1738351757322-r0txn251w98uk2aq8aa76s0m43d801buseil26isbq.png" // replace with your logo path
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-lg tracking-wide uppercase text-yellow-300">
            Paragon Mission
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-sm font-medium hover:text-yellow-300 transition-colors px-2 py-1 rounded cursor-pointer"
                >
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 mt-2 bg-[#a40d2e] text-white rounded-md shadow-xl w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {item.children.map((sub, index) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-sm hover:text-yellow-300 border-b border-gray-700 last:border-b-0"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-yellow-300 transition-colors px-2 py-1 rounded"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-yellow-300 transition-colors p-2 rounded"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#a40d2e] text-white px-4 pb-4 space-y-3 animate-slideDown">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-yellow-300"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transform transition  ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pl-4 space-y-2 mt-2 transition-all duration-300 ease-in-out">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block text-sm text-gray-200 hover:text-yellow-300 py-1"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium hover:text-yellow-300"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;