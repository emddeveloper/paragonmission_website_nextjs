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
        { label: "Activities", href: "/academic-activities" },
        { label: "Examination Details", href: "/examination-details" },
        { label: "Calender", href: "/academic-calender" },
        { label: "Rules & Regulations", href: "/academic-rules" },
      ],
    },
    {
      label: "About Us",
      children: [
        { label: "Head Master's Desk", href: "/headmaster" },
        { label: "Mission & Vision ", href: "/mission" },
        { label: "Proposed Manifesto ", href: "/manifesto" },
      ],
    },
    {
      label: "Admissions",
      children: [
        { label: "Admission Procedure", href: "/admission-procedure" },
        { label: "Fees Structure", href: "/fees" },
      ],
    },
    {
      label: "Notice Board",
      // children: [
      //   { label: "Process", href: "/admissions/process" },
      //   { label: "Apply Now", href: "/admissions/apply" },
      // ],
    },
    {
      label: "Contact Us",
      children: [
        { label: "Importent Phone Numbers", href: "/phone" },
      ],
    },
    {
      label: "School",
      children: [
        { label: "Uniforms", href: "/uniforms" },
        { label: "Infastructure", href: "/infastructure" },
        { label: "Parents", href: "/parents" },
        { label: "Students", href: "/students" },
        { label: "Our Teachers", href: "/teachers" },
        { label: "Children Rights", href: "/children-rights" },
      ],
    },
    {
      label: "Infrastructure",
      children: [
        { label: "School Van", href: "/van" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#a40d2e] to-[#c0392b] text-white shadow-lg">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/logo-png-e1738351757322-r0txn251w98uk2aq8aa76s0m43d801buseil26isbq.png"
            alt="Paragon Mission Logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-white/30"
          />
          <Link href={"/"} className="font-bold text-sm md:text-xl tracking-wider uppercase  sm:block">
            Paragon <br className="md:block hidden" /> Mission
          </Link>
        </div>

        {/* Desktop Navigation - Visible from md (768px) upwards */}
        <ul className="hidden md:flex justify-end items-center gap-3 lg:gap-5 xl:gap-6 flex-wrap">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group">
                <button
                  className="relative flex items-center cursor-pointer gap-1 text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors px-2 py-2 rounded-md whitespace-nowrap after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-yellow-300 after:w-0 after:transition-all after:duration-300 hover:after:w-full"

                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-[#a40d2e] rounded-lg shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 ${openDropdown === item.label
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                    }`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-5 py-3 text-sm hover:bg-[#c0392b]/40 hover:text-yellow-300 transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href || "#"}
                  className="relative text-sm lg:text-base font-semibold hover:text-yellow-300 transition-colors px-2 py-2 rounded-md whitespace-nowrap block
after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-yellow-300 after:w-0 after:transition-all after:duration-300 hover:after:w-full"

                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-yellow-300 transition-colors p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#a40d2e] text-white w-full absolute left-0 top-full shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="py-4 px-6 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="w-full flex items-center justify-between py-3 text-lg font-medium hover:text-yellow-300 transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pl-6 mt-1 space-y-2 border-l-2 border-yellow-300/40">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block py-2 text-gray-200 hover:text-yellow-300 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href || "#"}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-lg font-medium hover:text-yellow-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;