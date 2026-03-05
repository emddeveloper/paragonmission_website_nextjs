import Calender from "@/components/Calender/page";
import SchoolGallery from "@/components/SchoolGallery/page";
import HomePage from "@/pages/HomePage/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Calender />
      <SchoolGallery />
      {/* Why Choose Use */}
      <div>
        <div className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">

            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose Us
              </h2>
              <p className="mt-2 text-xl font-semibold text-gray-700">
                আমাদের বৈশিষ্ট্য
              </p>
              <div className="mx-auto mt-4 h-1 w-20 rounded bg-red-600"></div>
            </div>

            {/* Content Card */}
            <div className="mt-10 rounded-2xl bg-white p-6 sm:p-10 shadow-md">
              <ul className="space-y-6">

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✓
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    দীর্ঘদিনের অভিজ্ঞতা সম্পন্ন এবং উচ্চশিক্ষিত শিক্ষক মন্ডলী দ্বারা
                    পরিচালিত একটি উন্নতমানের শিক্ষা প্রতিষ্ঠান।
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✓
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    আপনার শিশুর সর্বাঙ্গীণ উন্নতি সাধনে আমাদের লক্ষ্য।
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✓
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    প্রতি শ্রেণীতে কমসংখ্যক ছাত্র-ছাত্রী নিয়ে প্রত্যেককে বাড়তি যত্ন
                    দেওয়া আমাদের অঙ্গীকার।
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✓
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    ইংরেজী ও গণিতে অতিরিক্ত গুরুত্বসহ শিশুর সার্বিক সাফল্যে আমাদের শিক্ষা
                    প্রতিষ্ঠানের কোন বিকল্প নেই।
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    ✓
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    পাঠ্যক্রম শিক্ষণের পাশাপাশি ছাত্রছাত্রীদের সুন্দর হাতের লেখা,
                    আচরণগত শৃঙ্খলা এবং আত্মবিশ্বাস গড়ে তোলাই আমাদের শিক্ষার মূল লক্ষ্য।
                  </p>
                </li>

              </ul>

              {/* CTA */}
              <div className="mt-10 text-center">
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Read More
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* Latest News */}
      <div className="bg-gray-100">
        <div className="max-w-[85rem] px-4 pt-12 sm:px-6 lg:px-8 mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Latest News
          </h1>
          <p className="mt-1 text-lg font-medium text-red-600">
            KEEP UPDATED

          </p>
        </div>

        <div className="max-w-[80rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card */}

            <Link href={"/news"} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src="/2025/01/s3-1-300x146.jpg"
                  alt="Notice"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 text-left">
                <Link
                  href="/notice"
                  className="text-lg font-semibold text-gray-800 transition group-hover:text-red-600"
                >
                  Test data
                </Link>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque
                  ipsum voluptas doloribus consequatur! Eius deserunt sed, possimus
                  accusantium harum consequatur blanditiis?
                </p>

                {/* CTA */}
                <div className="mt-auto pt-4">


                  <p className="mt-2 text-xs font-medium text-red-600">
                    December 15, 2025
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/news"} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src="/2025/01/Screenshot_20241212-205447_Facebook-300x169.jpg"
                  alt="Notice"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 text-left">
                <Link
                  href="/notice"
                  className="text-lg font-semibold text-gray-800 transition group-hover:text-red-600"
                >
                  Test data
                </Link>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque
                  ipsum voluptas doloribus consequatur! Eius deserunt sed, possimus
                  accusantium harum consequatur blanditiis?
                </p>

                {/* CTA */}
                <div className="mt-auto pt-4">


                  <p className="mt-2 text-xs font-medium text-red-600">
                    December 15, 2025
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/news"} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src="/2025/01/s1-300x146.jpg"
                  alt="Notice"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 text-left">
                <Link
                  href="/notice"
                  className="text-lg font-semibold text-gray-800 transition group-hover:text-red-600"
                >
                  Test data
                </Link>

                <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque
                  ipsum voluptas doloribus consequatur! Eius deserunt sed, possimus
                  accusantium harum consequatur blanditiis?
                </p>

                {/* CTA */}
                <div className="mt-auto pt-4">


                  <p className="mt-2 text-xs font-medium text-red-600">
                    December 15, 2025
                  </p>
                </div>
              </div>
            </Link>

            {/* Repeat cards */}
          </div>
        </div>

      </div>
      {/* Alumni */}
      <div className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Alumni <span className="text-gray-600">(প্রাক্তন ছাত্র)</span>
            </h2>
            <div className="mt-2 h-1 w-20 rounded bg-red-600"></div>
          </div>

          <div className="rounded-2xl bg-white shadow-md">
            <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-3 md:items-center">

              <div className="flex justify-center md:justify-start">
                <div className="h-28 w-28 overflow-hidden rounded-2xl ring-4 ring-blue-100">
                  <img
                    src="/s6-r0oda30g5nft2iunb8audwczf6y07wekl5jgx830s0.jpg"
                    alt="Alumni"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  Dummy Name
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Dummy text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
