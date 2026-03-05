"use client";

import Image from "next/image";

const manifestoPoints = [
    "ছাত্রছাত্রীদের মানসিক ও নৈতিক উন্নয়নের জন্য আধুনিক শিক্ষা পরিবেশ গড়ে তোলা",
    "শিক্ষার্থীদের জন্য উন্নত ও আধুনিক PROFESSIONAL COMPUTER COURSE চালু করা",
    "শিক্ষার্থীদের সর্বাঙ্গীন বিকাশের জন্য সহ-পাঠক্রমিক কার্যকলাপ বৃদ্ধি করা",
    "শিক্ষায় প্রযুক্তির ব্যবহার বৃদ্ধি করে ডিজিটাল ক্লাসরুম চালু করা",
    "অর্থনৈতিকভাবে দুর্বল শিক্ষার্থীদের জন্য CHEAP CANTEEN চালু করা",
    "শিক্ষার্থীদের দক্ষতা বৃদ্ধির জন্য বিশেষ প্রশিক্ষণ ব্যবস্থা করা",
    "সহ-পাঠক্রমিক শিক্ষা যেমন সংগীত, নৃত্য, বিতর্ক ও খেলাধুলার উন্নয়ন",
    "COMPETITIVE EXAMINATION CENTRE স্থাপন করা",
    "BRITISH COUNCIL-এর আদলে SPOKEN ENGLISH TRAINING CENTRE চালু করা",
    "ছাত্রছাত্রীদের যাতায়াতের সুবিধার্থে BUS SERVICE চালু করা",
    "MEDITATION HALL ও SEMINAR HALL স্থাপন করা",
    "উচ্চ শিক্ষা ও গবেষণার সুযোগ বৃদ্ধির জন্য বিশেষ পরিকল্পনা গ্রহণ",
    "BAR COUNCIL OF INDIA-এর অধীনে LAW COLLEGE স্থাপনের উদ্যোগ",
    "শিক্ষার্থীদের ভবিষ্যৎ গঠনে কর্মমুখী শিক্ষা চালু করা",
];

export default function Manifesto() {
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



                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        PROPOSED MANIFESTO
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (আগামী কার্যসূচী)
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
