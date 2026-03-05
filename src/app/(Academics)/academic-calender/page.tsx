


"use client";

import Image from "next/image";

const holidays = [
  { event: "New Year Day", date: "1st January", day: "Wednesday", off: "01" },
  { event: "Makar Sankranti", date: "14th January", day: "Tuesday", off: "01" },
  { event: "Netaji Birthday", date: "23rd January", day: "Thursday", off: "01" },
  { event: "Saraswati Puja", date: "3rd February", day: "Monday", off: "01" },
  { event: "Shab-e-Barat", date: "14th February", day: "Friday", off: "01" },
  { event: "Dol (Holi)", date: "14th March", day: "Friday", off: "02" },
  { event: "Id-ul-Fitr", date: "31st March", day: "Monday", off: "01" },
  { event: "Bengali New Year", date: "15th April", day: "Tuesday", off: "01" },
  { event: "May Day", date: "1st May", day: "Thursday", off: "01" },
  { event: "Rabindra Jayanti", date: "8th May", day: "Thursday", off: "01" },
  { event: "Summer Vacation", date: "Will be notified later", day: "–", off: "–" },
  { event: "Bakrid", date: "7th June", day: "Saturday", off: "01" },
  { event: "Rathayatra", date: "22nd June", day: "Saturday", off: "01" },
  { event: "Muharram", date: "6th July", day: "Sunday", off: "01" },
  { event: "Raksha Bandhan", date: "9th August", day: "Saturday", off: "01" },
  { event: "Independence Day", date: "15th August", day: "Friday", off: "01" },
  { event: "Janmashtami", date: "16th August", day: "Saturday", off: "01" },
  { event: "Vishwakarma Puja", date: "17th September", day: "Wednesday", off: "01" },
  { event: "Durga Puja Holiday", date: "28th Sept – 7th Oct", day: "Saturday – Tuesday", off: "10" },
  { event: "Kali Puja / Bhai Phota", date: "20th – 23rd October", day: "Monday – Thursday", off: "01" },
  { event: "Guru Nanak Birthday", date: "15th November", day: "Saturday", off: "01" },
  { event: "X-Mas Day", date: "25th December", day: "Thursday", off: "01" },
  { event: "Head Master’s Consideration", date: "–", day: "–", off: "2 Days Extra" },
];

export default function AcademicCalender() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Image */}
        <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/2025/01/s6-768x373.jpg" // replace image
            alt="School Holidays"
            width={1200}
            height={700}
            className="w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
          <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
            HOLIDAYS LIST
          </span>
          <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
            (ছুটির দিনের তালিকা)
          </span>
        </h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-md">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-red-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-800 text-lg">Event</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-800 text-lg">Date</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-800 text-lg">Day</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-800 text-lg">Days Off</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-t transition hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-lg">{item.event}</td>
                  <td className="px-4 py-3 text-lg">{item.date}</td>
                  <td className="px-4 py-3 text-lg">{item.day}</td>
                  <td className="px-4 py-3 text-lg font-medium text-gray-800">
                    {item.off}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
