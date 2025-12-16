

import Image from "next/image";

export default function Fees() {
    return (
        <section className="bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">

                {/* Image */}
                <div className="relative w-full h-[220px] md:h-[320px] rounded-xl overflow-hidden mb-6">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/2025/01/20240627_121637copy2-01-768x415.jpeg"
                        alt="School Building"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        FEES STRUCTURE OF THE INSTITUTION
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (FOR THE ACADEMIC YEAR – 2025)
                    </span>
                </h2>

                {/* Admission Fees */}
                <div className="overflow-x-auto mb-10">
                    <table className="w-full border border-gray-200 text-sm">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="border px-4 py-2 text-left">CATEGORY</th>
                                <th className="border px-4 py-2 text-left">FEES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["ADMISSION FEE (NURSERY TO CLASS IV)", "4500/-"],
                                ["ADMISSION FEE (CLASS V TO CLASS VI)", "5500/-"],
                                ["RE-ADMISSION (NURSERY TO CLASS VIII)", "1500/-"],
                                ["RE-ADMISSION (IX TO CLASS X)", "2000/- + Admission"],
                                ["GUIDE & SPORTS FEE", "200/-"],
                                ["EXCURSION, PICNIC PASTE, ANNUAL SOCIAL FUNCTION FEE", "TO BE NOTIFIED LATER"],
                            ].map(([label, value], i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">{label}</td>
                                    <td className="border px-4 py-2">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Exam Fees */}
                <div className="overflow-x-auto mb-10">
                    <table className="w-full border border-gray-200 text-sm">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="border px-4 py-2 text-left">EXAM FEES CATEGORY</th>
                                <th className="border px-4 py-2 text-left">FEES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-50 font-semibold">
                                <td colSpan={2} className="border px-4 py-2">
                                    EXAM FEES (NURSERY TO CLASS II)
                                </td>
                            </tr>
                            {["1ST TERM", "2ND TERM", "3RD TERM"].map((term, i) => (
                                <tr key={i}>
                                    <td className="border px-4 py-2">{term}</td>
                                    <td className="border px-4 py-2">200/-</td>
                                </tr>
                            ))}

                            <tr className="bg-gray-50 font-semibold">
                                <td colSpan={2} className="border px-4 py-2">
                                    EXAM FEES (CLASS III TO CLASS VIII)
                                </td>
                            </tr>
                            {["1ST TERM", "2ND TERM", "3RD TERM"].map((term, i) => (
                                <tr key={i}>
                                    <td className="border px-4 py-2">{term}</td>
                                    <td className="border px-4 py-2">200/-</td>
                                </tr>
                            ))}

                            <tr className="bg-gray-50 font-semibold">
                                <td colSpan={2} className="border px-4 py-2">
                                    EXAM FEES (CLASS IX TO CLASS X)
                                </td>
                            </tr>
                            {["1ST TERM", "2ND TERM", "3RD TERM"].map((term, i) => (
                                <tr key={i}>
                                    <td className="border px-4 py-2">{term}</td>
                                    <td className="border px-4 py-2">200/-</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Notes */}
                <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-lg">
                    <h3 className="text-red-700 font-semibold mb-3 text-xl">
                        বিদ্যালয়ের বেতন সংগ্রহ কয়েকটি নিয়মাবলী
                    </h3>
                    <div className="list-disc list-inside text-lg text-gray-700 space-y-2">
                        <p>

                            ১। ফাস্ট টার্ম, সেকেন্ড টার্ম ও অ্যানুয়াল পরীক্ষা যে মাসেই শুরু হবে ও যে তারিখে হবে, পরীক্ষা শুরু আগের মাস ৯ তারিখ চলমান মাসের বেতন বাধ্যতামূলক ভাবে অফিসে জমা দিতে হবে। না হলে পরীক্ষায় বসার অনুমতি বিদ্যালয়ের পক্ষ থেকে প্রদান করা হবে না।
                        </p>
                        <p>

                            ২। ডিসেম্বর মাসেই হচ্ছে সেশন শেষ হচ্ছে তাই নভেম্বর মাসের মধ্যে ডিসেম্বর মাসের বেতন দেওয়ার অনুমতি করা হচ্ছে।


                        </p>
                        <p>

                            ৩। প্রত্যেক ছাত্র-ছাত্রীর জানুয়ারি থেকে ডিসেম্বর মাস পর্যন্ত কোনো রকম ফি, বাস – টিউশন ফি, কম্পিউটার ফি, ল্যাবরেটরি ফি, সেশন ফি, বুক ফি এবং অন্যান্য ফি অবশ্যই জমা দিতে হবে। অন্যথায় ট্রান্সফার সার্টিফিকেট, প্রমোশন সার্টিফিকেট, মার্কশিট এবং সনদপত্র দেওয়া হবে না। যাহা বিদ্যালয় একবার গ্রহণ করবে সেই ফি কোনো ছাত্র বা ছাত্রী ফেরত পাবে না।


                        </p>
                        <p>

                            ৪। বেতন পরিশোধ সময় বিদ্যালয়ের রশিদ বহিরে অবশ্যই দেওয়া ফি’র কপি ছাত্র-ছাত্রীর সঙ্গে সংরক্ষণ করতে হবে। কারণ ভবিষ্যতে প্রদত্ত ফি সংক্রান্ত কোনো রকম বিভ্রান্তি দেখা দিলে ওই রশিদ ছাড়া কোনো বক্তব্য গ্রহণ করা হবে না।


                        </p>
                        <p>

                            ৫। এক মাসের বেতন পরিশোধের নির্দিষ্ট তারিখ অতিক্রম করলে জরিমানা হিসেবে প্রতিদিন ১০ টাকা করে গণ্য হবে।


                        </p>
                        <p className="font-bold">
                            যে কোনো মাসের মাসিক তার পরবর্তী মাসের ৭ (সাত) তারিখের মধ্যে পরিশোধিত না হলে ৫০ টাকা জরিমানা লাগবে।


                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
