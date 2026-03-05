"use client";

import Image from "next/image";

export default function Uniforms() {
    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                

                <div className="mx-auto mb-10 max-w-xl overflow-hidden rounded-3xl shadow-2xl">
                          <Image
                            src="/IMG-20240808-WA0042-300x237.jpg" // replace image
                            alt="School Holidays"
                            width={1200}
                            height={700}
                            className="w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        STUDENTS SCHOOL UNIFORM
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (ছাত্র-ছাত্রীদের বিদ্যালয়ের পোশাক)
                    </span>
                </h2>

                <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 sm:p-10 shadow-xl">
                    <div className="space-y-6 text-justify text-sm leading-relaxed text-gray-700 sm:text-base">
                        <p>
                            ছাত্রদের জন্য (সাধারণ দিন):- কফি কালার প্যান্ট ও ক্রীম কালারের শার্ট, কফি কালারের মোজা ও কালো বুট, কোমরে বেল্ট, শীতকালে কফি কালারের সোয়েটার। অষ্টম, নবম ও দশম শ্রেণীর ছাত্ররা কফি কালারের ফুল প্যান্ট পরবে।
                        </p>

                        <p>
                            যেদিন P.T. ক্লাস থাকবে: সাদা প্যান্ট ও সাদা টী শার্ট (অর্থাৎ সাদা কলার দেওয়া গেঞ্জী) সাদা মোজা ও সাদা কেটস্। অষ্টম শ্রেণীর ছাত্ররা সাদা ফুল প্যান্ট পরবে। বিঃ দ্রঃ- প্রতিদিন প্রত্যেক ছাত্রকে বিদ্যালয়ের। DENTITY CARD, ব্যাজ (BATCH), এবং TIE (টাই) পরে বিদ্যালয়ে আসতে হবে। P.T. ক্লাসের দিন TIE পরতে হবে না।
                        </p>

                        <p>
                            ছাত্রীদের জন্য (সাধারণ দিন): কফি কালারের স্কার্ট ও ক্রীম কালারের শার্ট, কফি কালারের মোজা ও কালো নিউকাট সু, শীতকালে কফি কালারের সোয়েটার। অষ্টম, নবম ও দশম শ্রেণীর ছাত্রীরা কফি কালারের সালোয়ার ও ক্রীম কালারের কামিজ পরবে।
                            (যেদিন P.T. ক্লাস থাকবে): সাদা হাফ স্কার্ট ও সাদা টী শার্ট (অর্থাৎ সাদা কলার দেওয়া গেঞ্জী, সাদা মোজা ও সাদা কেটস্। অষ্টম শ্রেণীর ছাত্রীরা সাদা সালোয়ার-কামিজ পরবে।
                        </p>

                        <p>
                            <span className="font-bold">বিঃ দ্রঃ– </span>
                            
                            প্রতিদিন প্রত্যেক ছাত্রীকে বিদ্যালয়ের ব্যাজ (BADGE), IDENTITY CARD এবং TIE (টাই) পরে বিদ্যালয়ে আসতে হবে। P.T. ক্লাসের দিন TIE পরতে হবে না।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
