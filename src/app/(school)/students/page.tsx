

"use client";

import Image from "next/image";

const manifestoPoints = [
    " প্রতিদিন প্রতিটি পিরিয়ডে কোন কোন বিষয়ে কী কী কাজ করলে তা সংক্ষিপ্ত আকারে লিখে রাখবে।",

" কোন বিষয়ের কোন জায়গা টা শিখতে বা করতে বেশি অসুবিধা হয়েছে তা লিখবে। সম্ভব হলে সেই অসুবিধা কিভাবে শিক্ষক/ শিক্ষকার সাহায্যে অতিক্রম করেছ, তা-ও উল্লেখ করবে। শিক্ষক/শিক্ষিকার।",

" যে যে অংশগুলি পড়তে বা করতে ভালো লেগেছে তা উল্লেখ করবে।",

" বন্ধুদের সঙ্গে কি কি ধরনের কাজে অংশগ্রহণ করেছ তাও অবশ্যই লিখবে।",

" রোজকার পড়াশোনায় শিক্ষিকা/শিক্ষকের থেকে কোন কোন ক্ষেত্রে বেশি সাহায্য নিতে হয়েছে তা লিখবে।",

];

export default function Students() {
    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Image */}
                <div className="mx-auto mb-12 max-w-xl overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s3-1-r0tdpky4mynma83m9nyqso3zfike2tcbgqaeyzwou0.jpg" // replace with your image
                        alt="School Building"
                        width={1400}
                        height={800}
                        className="w-full object-cover transition-transform duration-500 hover:scale-105"
                        priority
                    />
                </div>



                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        DUTIES AND RESPONSIBILITIES OF STUDENTS 
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (শিক্ষার্থীর দায়িত্ব ও কর্তব্য)
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
