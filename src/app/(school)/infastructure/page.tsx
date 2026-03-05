

"use client";

import Image from "next/image";

const manifestoPoints = [
    "২৪ ঘন্টা জেনারেটরের ব্যবস্থা।",

"বালক বালিকাদের জন্য পৃথক পর্যাপ্ত শৌচাগার।",

"প্রতি ফ্লোরে ট্যাপ ওয়াটার ফেসিলিটি এবং শৌচাগার ব্যবস্থা।",

"একাধিক খেলার মাঠ।",

"বিশুদ্ধ পানীয় জলের ব্যবস্থা।",

"অঙ্কন প্রক্রীয়ার মাধ্যমে শিশুর সৃজনশীল প্রতিভার বিকাশ।",

"যোগাসন, পি.টি., নৃত্যগীতের মাধ্যমে শারীরিক ও মানসিক উন্নতিসাধন।",

"ধারাবাহিক MOCK TEST এবং CLASS TEST – এর মাধ্যমে ছাত্র-ছাত্রীদের পরীক্ষাভীতি দূর করা।",

" সব এলাকায় স্কুল গাড়ী বা POOL CAR – এর ব্যবস্থা।",

"ছাত্র-ছাত্রীদের INDIVIDUAL COUNSELLING.",

" শিশুদের যেকোন দুর্বলতা কাটাতে “টাস্ক ফোর্স”।",

" মন্টেশ্বরী থেকে একাদশ শ্রেণি পর্যন্ত সব ছাত্র-ছাত্রীদের প্রতি শনিবার বাধ্যতামূলকভাবে ‘ফাউন্ডেশন কোর্স’।",

"১০০% সঠিক ও নির্ভুল STUDY MATERIALS.",

"STUDENTS’ WEEKLY DEVELOPMENT SURVEY & REPORTING.",

"বিশেষ ত্রুটি সংশোধনী ক্লাস।",

"‘প্যারাগন টিউটোরিয়াল হোম’  (নার্সারী থেকে দ্বাদশ শ্রেণী) ।",
];

export default function Infrastructure() {
    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-white py-10 px-4 sm:px-6 lg:px-8">
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



                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        INFRASTRUCTURE
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (সুযোগ সুবিধা)
                    </span>
                </h2>

                {/* Manifesto List */}
                <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 sm:p-10 shadow-xl">
                    <ul className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                        {manifestoPoints.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3"
                            >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
