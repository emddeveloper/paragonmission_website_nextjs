

"use client";

import Image from "next/image";

export default function ExaminationDetails() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Top Image */}
        <div className="mx-auto mb-12 max-w-xl overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/2025/01/Screenshot_20221116-212022_Google.jpg" 
            alt="Examinations"
            width={1200}
            height={700}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Heading */}

        <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
          <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
            EXAMINATIONS
          </span>
          <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
            (পরীক্ষাসমূহ)
          </span>
        </h2>

        {/* Content */}
        <div className="space-y-8 text-sm leading-relaxed text-gray-700">
          {/* Examination Details */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-bold text-gray-800 text-xl">
              Examination Details (পরীক্ষার বিস্তারিত)
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-lg">
              <li>1st Terminal Examination</li>
              <li>2nd Terminal Examination</li>
              <li>Annual Examination</li>
              <li>Weekly Test</li>
              <li>Monthly Test</li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-bold text-gray-800 text-xl">
              Eligibility to Appear in Examination (পরীক্ষায় বসার যোগ্যতা)
            </h3>
            <p className="text-lg">
              শিক্ষার্থীদের নির্ধারিত SARS জমা দেওয়া, PCP উপস্থিতি এবং
              অভ্যন্তরীণ মূল্যায়ন সম্পন্ন করা আবশ্যক। 1st Term, 2nd Term এবং
              Annual পরীক্ষায় অংশগ্রহণের জন্য বিদ্যালয়ের নির্দেশনা মেনে চলতে
              হবে।
            </p>
          </div>

          {/* Declaration of Result */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-bold text-gray-800 text-xl">
              Declaration of Result (ফল প্রকাশ)
            </h3>
            <p className="text-lg">
              পরীক্ষার ফলাফল মূল্যায়নের পর নির্ধারিত সময়ে প্রকাশ করা হবে।
              পরীক্ষার্থীদের MARK SHEET প্রদান করা হবে এবং বার্ষিক পরীক্ষার
              MARK SHEET আলাদাভাবে ইস্যু করা হবে।
            </p>
          </div>

          {/* Review / Scrutiny */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-bold text-gray-800 text-xl">
              Provision for Review / Scrutiny / Re-Examination
            </h3>
            <p className="text-lg">
              উত্তরপত্র পুনর্মূল্যায়ন, স্ক্রুটিনি অথবা পুনঃপরীক্ষার জন্য
              নির্ধারিত ফর্ম ও ফি সহ আবেদন করতে হবে। প্রযোজ্য ক্ষেত্রে বোর্ডের
              নির্দেশনা অনুযায়ী ব্যবস্থা নেওয়া হবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
