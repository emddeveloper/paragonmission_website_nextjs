"use client";

import Image from "next/image";

export default function Van() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Image Section */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-3xl h-[220px] sm:h-[300px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://paragonmission.com/wp-content/uploads/2025/02/mahindra-supro-school-van.avif" // replace with your image
              alt="School Transport"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
          <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
            পুলকার পরিষেবা নেওয়ার ক্ষেত্রে কিছু নিয়মাবলী
          </span>
        </h2>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200">
          <div className="px-6 sm:px-8 py-8">
            <ol className="space-y-6 list-decimal list-inside text-sm sm:text-base text-slate-700 leading-relaxed">
              <li>
                স্কুলকার পরিষেবা নেওয়ার ক্ষেত্রে আগে দূরত্ব দেখে তারপর স্কুলকারের মাসিক ভাড়া ঠিক হবে।
              </li>
              <li>
                পরিষেবা নেওয়ার সময় শিশুর লোকেশন সঠিকভাবে জানাতে হবে। সেশন শুরু হওয়ার পর মাঝপথে শিশুর লোকেশন পরিবর্তন করা সম্ভব নয়। তবে বিশেষ প্রয়োজন হলে শিশুর লোকেশন পরিবর্তন করতে হলে বিদ্যালয়ে আগে থেকে জানাতে হবে এবং বিদ্যালয় কর্তৃপক্ষ সিদ্ধান্ত নেবে।
              </li>
              <li>
                বিদ্যালয় অনুমোদিত স্কুলকার পরিষেবা নিয়ে সম্পূর্ণ বোঝা শেষ হওয়ার আগে গাড়ি ছাড়া যাবে না। বিদ্যালয় অনুমোদিত ছাড়া কোনো গাড়ির স্কুলকার পরিষেবার দায়িত্ব বিদ্যালয় নেবে না। একান্তিক শিক্ষার্থীরা বিদ্যালয়ের নিজস্ব স্কুলকার পরিষেবা পাবে।
              </li>
              <li>
                বিদ্যালয় অনুমোদিত স্কুলকারের মাসিক পরিষেবা ফি মাসের শুরুতেই অফিসে পরিষোধ করতে হবে। পরিষেবা নেওয়ার সময় রসিদ সংগ্রহ করতে হবে এবং স্কুলকার চালকের কাছে নির্দিষ্ট সময়ের ছাড়পত্র স্বাক্ষর দিতে হবে।
              </li>
              <li>
                অন্য জেলা থেকে কোনো রুটে স্কুলকার যাবে না। কোনো নতুন জায়গায় স্কুলকার যাওয়ার জন্য আবেদন দিতে হবে এবং এককালীন ভাড়া পরিষোধ করতে হবে। পরে ১০ দিনের মধ্যে স্কুলকার পরিষেবা শুরু হবে।
              </li>
              <li>
                যে সকল ছাত্রছাত্রী বিদ্যালয়ের স্কুলকার মাধ্যমে যাতায়াত করে, তাদের মাসিক বেতন ও পরিষেবা বাবদ জরিমানা ধার্য হবে এবং পরে সময় মতো পরিষোধ না হলে মাস থেকে স্কুলকার পরিষেবা বন্ধ করার জন্য বিদ্যালয় পক্ষ সিদ্ধান্ত নেবে।
              </li>
            </ol>
          </div>
        </div>

      </div>
    </section>
  );
}
