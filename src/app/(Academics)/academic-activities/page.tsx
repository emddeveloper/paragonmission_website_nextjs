"use client";

import Image from "next/image";

export default function AcademicActivities() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative mx-auto mb-12 max-w-3xl overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s3-1-r0tdpky4mynma83m9nyqso3zfike2tcbgqaeyzwou0.jpg" 
            alt="Academic Activity"
            width={1200}
            height={700}
            className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
          <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
            ACADEMIC ACTIVITIES
          </span>
          <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
            (শিক্ষাকেন্দ্রিক কার্যসূচী)
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
              MODULE
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              সিলেবাস অনুযায়ী প্রথম পর্ব (1st Term), দ্বিতীয় পর্ব (2nd Term)
              এবং বার্ষিক পরীক্ষার আগে শিক্ষার্থীদের হাতে সব বিষয়ের স্টাডি
              ম্যাটেরিয়াল তুলে দেওয়া হবে। শিক্ষকরা সম্পূর্ণ স্টাডি ম্যাটেরিয়াল
              প্রদান না করলেও পড়াশোনার কৌশলগত দিকনির্দেশনা দেবেন।
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
              STUDENT ASSIGNMENT RESPONSE SHEETS (SARS)
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              প্রতিটি ইউনিটে সংক্ষিপ্ত পাঠ্যসূচির উপর ভিত্তি করে প্রশ্নপত্র দেওয়া
              হবে। শিক্ষার্থীরা নির্দিষ্ট সময়ের মধ্যে উত্তর লিখে জমা দেবে।
              বার্ষিক পরীক্ষায় অংশগ্রহণের জন্য SARS-এ ন্যূনতম 40% নম্বর বা ‘C’
              গ্রেড অর্জন বাধ্যতামূলক। মূল্যায়নের পর উত্তরপত্র ফেরত দেওয়া হবে।
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
              PERSONAL CONTACT PROGRAMME (PCP)
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              বিষয়ভিত্তিক সমস্যার সমাধান, আলোচনা ও দিকনির্দেশনার জন্য PCP
              পরিচালিত হবে। সিলেবাসের অংশবিশেষ শেষ হওয়ার পর এবং SARS জমা দেওয়ার
              পর PCP অনুষ্ঠিত হবে। প্রতিটি শিক্ষার্থীর কমপক্ষে 60% PCP উপস্থিতি
              বাধ্যতামূলক।
            </p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
              PERSONAL CONTACT PROGRAMME (PCP)
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              বিষয়ভিত্তিক সমস্যার সমাধান, আলোচনা ও দিকনির্দেশনার জন্য PCP
              পরিচালিত হবে। সিলেবাসের অংশবিশেষ শেষ হওয়ার পর এবং SARS জমা দেওয়ার
              পর PCP অনুষ্ঠিত হবে। প্রতিটি শিক্ষার্থীর কমপক্ষে 60% PCP উপস্থিতি
              বাধ্যতামূলক।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
