

"use client";

import Image from "next/image";

export default function AcademicRules() {
    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="relative mx-auto mb-12 max-w-3xl overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                        src="/s3-1-r0tdpky4mynma83m9nyqso3zfike2tcbgqaeyzwou0.jpg"
                        alt="Academic Activity"
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        Rules & Regulations
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        অবশ্য পালনীয় নিয়ম সমূহ :-
                    </span>
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            MODULE
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ১। সোমবার থেকে শনিবার বিদ্যালয় চালু থাকবে বেলা ১০ টা ১৫ মিনিটে বিদ্যালয়ে সামনের অফিস ও মেইন গেট খোলা হবে। ১০ টা ৫০ মিনিটে প্রার্থনা সভা শুরু হওয়ার পূর্বে প্রত্যেক ছাত্র-ছাত্রীকে বিদ্যালয়ে উপস্থিত হতে হবে এবং প্রার্থনা সভায় যোগ দিতে হবে।
                        </p>
                    </div>

                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            STUDENT ASSIGNMENT RESPONSE SHEETS (SARS)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ২। যে সমস্ত ছাত্র বা ছাত্রীকে অভিভাবকেরা শুরুর সময় বিদ্যালয়ে পৌছে দেন এবং ছুটির পরে নিয়ে যান, তাঁরা সেই বিভাগের ছুটির পর ১০ মিনিটের মধ্যে ছাত্র/ ছাত্রীকে নিয়ে যাবেন। এ বিষয়ে কোনো অন্যথা করা যাবে না। কোনো বিশেষ কারন ছাড়া বাচ্ছাকে ছুটির অনেক আগে বা অনেক পরে বাড়ী নিয়ে যাওয়া যাবে না।
                        </p>
                    </div>

                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ৩। প্রত্যেক ছাত্র ছাত্রীকে পরিষ্কার পরিচ্ছন্নভাবে নির্দিষ্ট পোশাক পরে প্রতিদিন ১০ টা ৫০ মিনিটে বিদ্যালয়ের প্রেয়ার এ অংশ নিতে হবে। যেদিন যে যে ছাত্রছাত্রীর পি টি কিংবা ব্রতচারীর ক্লাস থাকবে, সেদিন তারা পিটি ক্লাসের জন্য নির্দিষ্ট (সাদা) পোশাক পরে আসবে।
                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ৪। প্রত্যেক ছাত্র ছাত্রীকে বিদ্যালয়ের অফিস থেকে প্রসপেকটাস, ডাইরি এবং আইডেন্টিটি কার্ড সংগ্রহ করে নিতে হবে। প্রতিদিন স্কুল ডাইরি বিদ্যালয়ে নিয়ে আসা এবং আই কার্ড পরে আসা বাধ্যতামূলক। ডাইরি তে নির্দিষ্ট স্থানে ছাত্র/ছাত্রীর ছবি লাগাতে হবে।
                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ৫। স্কুল থেকে ডাইরি পাওয়ার পর ডাইরির মধ্যে সুন্দর ভাবে ছাত্র-ছাত্রীর নাম, পিতার নাম, মাতার নাম, ক্লাস, সেকশন, রোল নং, ঠিকানা, স্কুল গাড়ীর নং (যদি থাকে) এবং বাবা মায়ের মোবাইল নম্বর লিখে রাখতে হবে। পুল কার ড্রাইভার এর নাম এবং মোবাইল নম্বর ডাইরি তে লিখে রাখতে হবে।
                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ৬। স্কুল চলাকালীন পিতা/মাতার চিঠি ছাড়া অথবা স্বয়ং তাঁদের একজন সশরীরে এসে আবেদন না জানালে ছাত্র/ছাত্রীকে কোনো ভাবেই ছুটি দেওয়া যাবে না। ছুটির অনুমোদন এর জন্য বিদ্যালয়ের অফিসে এসে সাক্ষাৎ করতে হবে। একদিনের বেশী বিদ্যালয়ে অনুপস্থিত হলে অনুপস্থিতির কারণ জানিয়ে অভিভাবককে অবশ্যই ডায়েরিতে লিখে দিতে হবে।


                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ৭। বিদ্যালয়ের ক্লাস চলাকালীন কোনো অভিভাবক অভিভাবিকা কোনো শিক্ষক বা শিক্ষিকার সাথে দেখা করতে পারবেন না। ক্লাস শেষ হলে রেক্টর ম্যাডামের এর মাধ্যমে ছাত্র-ছাত্রীর বিষয়ে শিক্ষক বা শিক্ষিকার সাথে কথা বলা যাবে।




                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ৮। বিদ্যালয়ের সব ক্লাসের সমস্ত ছাত্র ছাত্রী এবং আমাদের প্রিয় অভিভাবক বৃন্দকে স্পষ্টভাবে জানাতে চাই যে ছাত্র-ছাত্রী গুরুতর অসুস্থ না হলে বা বাড়ীতে বড় কোনো অনুষ্ঠান ছাড়া কোনো ভাবে স্কুল কামাই করা যাবে না। অনুষ্ঠানের জন্য আগে থেকে দরখাস্ত নিয়ে ছুটি নিতে হবে। অসুস্থতার জন্য অনুপস্থিত হলে মেডিক্যাল সার্টিফিকেট দিয়ে যেদিন স্কুলে যোগ দেবে সেদিন দরখাস্ত জমা দিতে হবে। কোনো ছাত্র ছাত্রীর অহেতুক স্কুল কামাই করার অভ্যেস থাকলে তা কাটাতেই হবে। কান্নাকাটি করলেও বুঝিয়ে তাকে স্কুলে পাঠাতেই হবে, এর পরে সেই বাচ্চার বাকি সমস্ত দায়িত্ব বিদ্যালয়ের।




                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ৯। প্রতিদিন ‘রুটিন’ অনুযায়ী বই খাতা এবং যেদিন ড্রয়িং ক্লাস থাকবে সেদিন ড্রয়িং সংক্রান্ত সমস্ত উপকরণ সঙ্গে অবশ্যই রাখতে হবে।




                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ১০। তৃতীয় শ্রেণী থেকে দশম শ্রেণীর সব ছাত্র ছাত্রীর নিজস্ব ‘জ্যামিতি বক্স’ এবং একটি করে ইংরাজী থেকে বাংলা ও একটি বাংলা থেকে ইংরাজী অভিধান থাকতেই হবে।




                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ১১। সমস্ত ছাত্র ছাত্রীকে নিজস্ব রুমাল, টিফিন এবং জলের বোতল সঙ্গে অবশ্যই রাখতেহবে।




                        </p>
                    </div>
                    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        {/* <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-red-600">
                            PERSONAL CONTACT PROGRAMME (PCP)
                        </h3> */}
                        <p className="text-lg leading-relaxed text-gray-600">
                            ১২। বিদ্যালয়ের কোনো বিষয়ে মা/বাবার যদি কোনো অভিযোগ থাকে বা কোনো গঠনমূলক সমালোচনা থাকে কিংবা আরো উন্নতির জন্য যদি কোনো প্রস্তাব থাকে, তাহলে স্কুল ডাইরিতে লিখে অবশ্যই তা জানাতে হবে। আমরা ত্রুটি মুক্ত হয়ে আপনাদের কাছে কৃতজ্ঞ থাকব।




                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
