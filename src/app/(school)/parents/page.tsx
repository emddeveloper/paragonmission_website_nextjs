




"use client";

import Image from "next/image";

const manifestoPoints = [
    "প্রতিদিন আপনার সন্তানের দিনলিপি তে যা নথিভুক্ত করছে, তার খেয়াল রাখবেন ও স্বাক্ষর করবেন।",
    "দিনলিপির বিবরণ অনুযায়ী প্রয়োজনে মতো শ্রেণী শিক্ষক/ শ্রেণী শিক্ষিকার সঙ্গে দেখা করবেন।",

];

export default function Parents() {
    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Image */}
                <div className="mx-auto mb-12 max-w-xl overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                        src="/parents-768x512.jpg"
                        alt="School Building"
                        width={1400}
                        height={800}
                        className="w-full object-cover transition-transform duration-500 hover:scale-105"
                        priority
                    />
                </div>



                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        অভিভাবক/অভিভাবিকার দায়িত্ব
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
