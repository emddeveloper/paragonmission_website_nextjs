






"use client";

import Image from "next/image";

const manifestoPoints = [
    "১-১৮ বছর পর্যন্ত তুমি নাবালক।",
    "তোমার খেলাধুলা করার ও স্বাধীন মত প্রকাশ করার অধিকার আছে।",
    "ঘরে কিংবা বাইরে তোমাকে কেউ অযথা ভাবে স্পর্শ করলে তৎক্ষণাৎ প্রতিবাদ করো।",
    "মেয়েদের ১৮ বছর ও ছেলেদের ২১ বছর না হলে তারা নাবালক থাকে। নাবালক বিয়ে করা বা দেওয়া কোর্টের মতে দণ্ডনীয় অপরাধ এবং বাল্যবিবাহে পুলিশের অনুমতি আবশ্যক।",
    "ঘরে বা বিদ্যালয়ে কেউ তোমার উপর শারীরিক বা মানসিক অত্যাচার করলে সঙ্গে সঙ্গে জানাবে।",
    "শিশুশ্রম কখনোই নয়।",
    "কেউ তোমাকে নেশাজাতীয় দ্রব্য ব্যবহার করতে বাধ্য করতে পারে না।",
    "কেউ তোমাকে অপহরণ বা পাচার করতে পারবে না।",
    "কেউ তোমার নামে মিথ্যা দোষ চাপাতে পারে না।",
    "ফোন ও ইন্টারনেটে চ্যাট করার সময় সাবধানে বন্ধু তৈরি করো এবং বড় ব্যক্তির সাথে ব্যক্তিগত তথ্য শেয়ার করো না।"
];


export default function ChildrenRights() {
    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Image */}
                <div className="mx-auto mb-12 max-w-xl overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                        src="/childrens-rights-1.png"
                        alt="School Building"
                        width={1400}
                        height={800}
                        className="w-full object-cover transition-transform duration-500 hover:scale-105"
                        priority
                    />
                </div>



                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        Children Rights
                    </span>

                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (শিশুর অধিকার)
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
