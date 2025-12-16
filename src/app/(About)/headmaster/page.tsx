"use client";

import Image from "next/image";

export default function HeadMaster() {
    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="relative mx-auto mb-12 max-w-3xl overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/20211112_133040-r0nyp0e7200urhvdgzgxiab4iq2erm5u84oza5dmm0.jpg"
                        alt="Academic Activity"
                        width={1200}
                        height={700}
                        className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-red-700 sm:text-3xl md:text-4xl">
                    <span className="lg:border-b-4 border-red-600 pb-2 underline lg:no-underline">
                        Head Master's Desk
                    </span>
                    <span className="block pt-2 text-2xl sm:text-3xl md:text-4xl font-semibold mt-5 text-red-700 underline">
                        (প্রধান শিক্ষকের কলমে)
                    </span>
                </h2>

                <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 sm:p-10 shadow-xl">
                    <div className="space-y-6 text-justify text-sm leading-relaxed text-gray-700 sm:text-base">
                        <p>
                            Paragon Mission, founded on 3rd March, 1996 under Biki-Hakola Paragon
                            Multipurpose Educational And Social Welfare Society and registered
                            under West Bengal Act XXVI of 1961 & West Bengal Societies
                            Registration Rules 1963, is an institution dedicated to developing
                            the quality of the human mind beyond caste, creed, religion, sex,
                            and social status. It is a unique institution in the district of
                            Howrah.
                        </p>

                        <p>
                            As conceived by Sri Swapan Kumar Saha, the then Karmadhyaksha of
                            Siksha, Sanskriti, Tathya & Krira and Founder of 40 Shishu Siksha
                            Kendras, 4 Madhyamik Siksha Kendras and 122 Continuing Education
                            Centres at Panchla Block, this “Temple of Learning” is dedicated to
                            the memory of Late Jitendranath Saha, Late Prasadi Saha & Late
                            Samarendranath Saha. It continues to promote and disseminate the
                            ideals of Rabindranath Tagore, Swami Vivekananda and Dr. A.P.J.
                            Abdul Kalam across Science, Technology, Visual Arts, Performing
                            Arts and Humanities.
                        </p>

                        <p>
                            In 2013, Paragon Mission started its Secondary Section by opening
                            Class V for existing Class IV pass-out students. Experienced and
                            dedicated faculties ensure training up to Higher Secondary level,
                            providing scope for project work, workshops and practical
                            activities in well-equipped laboratories.
                        </p>

                        <p>
                            The Biki-Hakola Paragon Multipurpose Educational and Social Welfare
                            Society serves as a lighthouse for learners deprived of true
                            education. Paragon Mission, recognized as an Institution of
                            Excellent Teaching and Learning under West Bengal Society
                            Registration Rules 1963, began its journey as a Secondary School in
                            the academic session 2013 after opening Class V as the foundation
                            of an Upper Primary School.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
