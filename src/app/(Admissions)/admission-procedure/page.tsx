

"use client";

import Image from "next/image";

export default function AdmissionProcedure() {
    return (
        <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Image */}
                <div className="flex justify-center mb-10">
                    <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="https://paragonmission.com/wp-content/uploads/2025/01/IMG-20240808-WA0042-300x237.jpg"
                            alt="Students in School Uniform"
                            width={500}
                            height={350}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>



                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        ADMISSION PROCEDURE
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (ভর্তি প্রক্রিয়া)
                    </span>
                </h2>

                {/* Content Card */}
                <div className="bg-gray-50 rounded-3xl shadow-sm p-6 sm:p-10">
                    <ul className="space-y-5 text-gray-800 leading-relaxed text-[15px] sm:text-base">
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" />
                            <p>
                                বিদ্যালয়ে শিক্ষার মান বজায় রাখার জন্য নির্দিষ্ট ভর্তি নীতি অনুসরণ করা হয়। ভর্তির ক্ষেত্রে ভর্তি পরীক্ষা এবং সাক্ষাৎকার গ্রহণ করা হয়।
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" />
                            <p>
                                L.K.G থেকে নবম শ্রেণী পর্যন্ত সীমিত আসনে ভর্তি দেওয়া হয়। শিক্ষার্থীর পূর্ববর্তী শ্রেণীর ফলাফল ও আচরণ বিবেচনা করা হয়।
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" />
                            <p>
                                উচ্চ শ্রেণীতে ভর্তির ক্ষেত্রে পূর্ববর্তী বিদ্যালয়ের ট্রান্সফার সার্টিফিকেট আবশ্যক।
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" />
                            <p>
                                ভর্তি ফর্ম জমা দেওয়ার সময় জন্ম শংসাপত্র এবং প্রাসঙ্গিক নথিপত্র জমা দিতে হবে।
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" />
                            <p>
                                নতুন ছাত্রছাত্রীদের জন্য <strong>ADMISSION FORM</strong> এবং <strong>STUDENT DATA CAPTURE FORMAT</strong> পূরণ করা বাধ্যতামূলক।
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" />
                            <p>
                                <strong>RENEWAL / CONTINUATION OF CANDIDATURE (ENROLMENT)</strong> প্রতি শিক্ষাবর্ষের শুরুতে সম্পন্ন করতে হবে।
                            </p>
                        </li>
                    </ul>

                    {/* Highlight Box */}
                    <div className="mt-10 border-l-4 border-red-600 bg-red-50 p-5 rounded-xl">
                        <h3 className="font-semibold text-red-700 mb-2">
                            ছাত্র বা ছাত্রীর পুনর্নবীকরণ ধারাবাহিকতা (নথিভূক্তকরন) :-
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            কোন ছাত্র বা ছাত্রী একবার ভর্তি হলে পরবর্তী বছরগুলিতে সেই ছাত্র বা ছাত্রীকে আর ভর্তি হতে হয় না। দ্বিতীয় বা পরবর্তী বছরগুলিতে ADMISSION FEES নেওয়া হয় না। সেশন ফীস্ সহ অন্যান্য ফীগুলি ধার্য্য হয়। একটি শিক্ষাবর্ষ শেষ হলে পরবর্তী শিক্ষাবর্ষে ৩১ শে মার্চের মধ্যে কোন ছাত্র বা ছাত্রী সেশন ফীস্ জমা দিয়ে RENEWAL বা নবীকরন না করলে ঐ ছাত্র বা ছাত্রীর ENROLMENT বাতিল হবে।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
