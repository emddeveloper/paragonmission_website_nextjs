"use client";

import Image from "next/image";

const contacts = [
  { designation: "প্রধান শিক্ষক", name: "শ্রী অমল কুমার সাহা", phone: "9674365180" },
  { designation: "সহকারী শিক্ষক", name: "শ্রী রঞ্জন পাল", phone: "9163458808" },
  { designation: "অফিস সহকারী", name: "শ্রীমতি আশা দাস", phone: "9801234567" },
  { designation: "লাইব্রেরিয়ান", name: "শ্রী দেবাশিস দে", phone: "8777037281" },
  { designation: "ক্লার্ক", name: "শ্রী সুমন ঘোষ", phone: "9163550585" },
];

export default function Phone() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="relative w-full h-[220px] sm:h-[280px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s3-1-r0tdpky4mynma83m9nyqso3zfike2tcbgqaeyzwou0.jpg"
              alt="School Group"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Table Card */}

          <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
          <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
            IMPORTANT NAME & PHONE NUMBERS
          </span>
          <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
            (গুরুত্বপূর্ণ নাম ও ফোন নম্বর )
          </span>
        </h2>
        <div className=" rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-200 text-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold tracking-wide text-lg">
                    পদবি
                  </th>
                  <th className="px-6 py-3 text-left font-semibold tracking-wide text-lg">
                    নাম
                  </th>
                  <th className="px-6 py-3 text-left font-semibold tracking-wide text-lg">
                    ফোন নম্বর
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {contacts.map((item, index) => (
                  <tr
                    key={index}
                    className="even:bg-slate-50 hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-slate-700 text-lg">
                      {item.designation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900 text-lg">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={`tel:${item.phone}`}
                        className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800 text-lg"
                      >
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        {item.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-lg text-center text-slate-600 max-w-3xl mx-auto">
           <span className="font-bold">বিঃ দ্রঃ-</span>
          অভিভাবক গণ ছুটির দিন ব্যতীত ক্লাস টিচার বা মেন্টরদের ছাত্র-ছাত্রীর পঠন-পাঠন সংক্রান্ত যে কোনো বিষয়ে ফোন করে খোঁজ নিতে পারেন। পঠন পাঠন ব্যতীত অন্য কোনো বিষয়ে মেন্টরদের ফোন করা যাবে না। যে কোনো বিষয়ে অনুসন্ধান করার ক্ষেত্রে বিদ্যালয়ের নম্বরে ফোন করে অনুসন্ধান করতে হবে।
        </p>
      </div>
    </section>
  );
}
