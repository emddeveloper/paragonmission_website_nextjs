"use client";

import Image from "next/image";

export default function Mission() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Image */}
        <div className="mx-auto mb-12 max-w-xl overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/20240627_121637copy2-01-r0nyp29vfo3fepsn60a6n9u1pht570dawdzy8pau9k.jpeg" // replace with your image
            alt="School Building"
            width={1400}
            height={800}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* Heading */}
        <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
          <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
            OUR VISION & MISSION
          </span>
          <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
            (লক্ষ্য ও উদ্দেশ্য)
          </span>
        </h2>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-base font-bold uppercase tracking-wide text-blue-700">
              Our Vision
            </h3>
            <p className="mb-4 text-base leading-relaxed text-gray-700 ">
              We are committed to become a premier educational body with an object
              to create Leaders, Winners, Achievers and ultimately great Human
              Beings by ensuring excellence through:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-base text-gray-700 ">
              <li>Enriched knowledge, creativity and awareness</li>
              <li>Continuous improvement and student empowerment</li>
            </ul>
          </div>

          {/* Mission */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="mb-4 inline-block rounded-full bg-green-50 px-4 py-1 text-base font-bold uppercase tracking-wide text-green-700">
              Our Mission
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 ">
              <li>To provide traditional education with scientific training and technological approach</li>
              <li>To facilitate holistic development of students</li>
              <li>To define, control and continuously improve learning processes</li>
              <li>To promote educational and cultural well-being of the community</li>
              <li>To empower human resources with knowledge, values and self-confidence</li>
              <li>To disseminate philosophies of Rabindranath Tagore, Swami Vivekananda and Dr. A.P.J. Abdul Kalam</li>
              <li>To utilize retired teachers and professors as key resource persons</li>
              <li>To enhance job opportunities through skill development</li>
              <li>To ensure creativity, expression and innovation</li>
              <li>To promote commitment to education, equality and excellence</li>
              <li>To make leadership in vision, innovation and initiative</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
