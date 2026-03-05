// components/Footer.tsx
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Top Section */}
      <div className="relative w-full">
        <div className="bg-black skew-y-2">
          <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 -skew-y-2">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <Image
                src="/logo-png-e1738351757322-r0txn252orgj3rlnlkugk89jsd3s4of2m2hy23bzcg.png" 
                alt="Paragon Mission Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
              <h2 className="text-lg font-semibold text-white">
                PARAGON MISSION
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed max-w-md">
              Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec
              sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate
              cursus a sit amet mauris.
            </p>

            {/* Contact Info */}
            <div className="text-sm space-y-1">
              <p>📞 Phone: +1 916-875-2235</p>
              <p>📠 Fax: +1 916-875-2235</p>
              <p>✉️ Email: info@domain.ltd</p>
              <p>🌐 Website: www.paragonmission.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#b20a2c] text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-4">OUR LINKS</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">OUR SCHOOL</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4">STUDENTS</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold mb-4">SITE MENUS</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-gray-400 text-center text-sm py-4">
        © {new Date().getFullYear()} Paragon Mission ~ Website Designed & Maintained by{" "}
        <span className="text-blue-400 font-medium"><a href="https://saypinfotech.com" target="_blank" rel="noopener noreferrer">SAYP INFOTECH</a></span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
