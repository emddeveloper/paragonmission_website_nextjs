import HeaderSection from "@/components/HomeComponents/Header/page"
import Link from "next/link"

const HomePage = () => {
    return (
        <div>
            <HeaderSection />
            <div className="bg-gray-200 mt-10">
                <div className="max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 ">
                        <div className="group flex gap-y-6 size-full bg-gray-200 focus:outline-hidden  rounded-lg p-5 border border-red-400">
                            <svg className="shrink-0 size-8 text-red-800 mt-0.5 me-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>

                            <div>
                                <div>
                                    <h3 className="block font-bold text-gray-800 ">VISIT SCHOOL</h3>
                                    <p className="text-gray-600 ">We employed only the best of the best.</p>
                                </div>


                            </div>
                        </div>

                        <a className="group flex gap-y-6 size-full bg-gray-200 focus:outline-hidden  rounded-lg p-5 border border-red-400 " href="#">
                            <svg className="shrink-0 size-8 text-red-800 mt-0.5 me-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" /></svg>

                            <div>
                                <div>
                                    <h3 className="block font-bold text-gray-800 ">INQUIRE</h3>
                                    <p className="text-gray-600 ">Please contact us. We’re ready to help you.</p>
                                </div>


                            </div>
                        </a>

                        <a className="group flex gap-y-6 size-full bg-gray-200 focus:outline-hidden  rounded-lg p-5 border border-red-400 " href="#">
                            <svg className="shrink-0 size-8 text-red-800 mt-0.5 me-6 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>

                            <div>
                                <div>
                                    <h3 className="block font-bold text-gray-800 ">ONLINE FORM DOWNLOAD</h3>
                                    <p className="text-gray-600 ">Download recent Documents here.</p>
                                </div>


                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <Link
                        href="#"
                        className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-center size-12 rounded-xl bg-red-600">
                                <svg className="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                            </div>

                            <div className="mt-5 flex flex-col flex-1">
                                <h3 className="min-h-[3.5rem] text-lg font-semibold text-gray-800 group-hover:text-gray-600">
                                    FOUNDED 3rd March 1996
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                    Paragon Mission, founded on 3rd March, 1996 under Biki-Hakola Paragon
                                    Multipurpose Educational And Social Welfare Society and Registered
                                    under West Bengal Act...
                                </p>

                                <span className="mt-auto inline-flex items-center gap-x-1.5 pt-4 text-sm font-medium text-red-600 group-hover:underline">
                                    Learn more
                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-center size-12 rounded-xl bg-red-600">
                                <svg className="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                            </div>

                            <div className="mt-5 flex flex-col flex-1">
                                <h3 className="min-h-[3.5rem] text-lg font-semibold text-gray-800 group-hover:text-gray-600">
                                    FOUNDED 3rd March 1996
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                    Paragon Mission, founded on 3rd March, 1996 under Biki-Hakola Paragon
                                    Multipurpose Educational And Social Welfare Society and Registered
                                    under West Bengal Act...
                                </p>

                                <span className="mt-auto inline-flex items-center gap-x-1.5 pt-4 text-sm font-medium text-red-600 group-hover:underline">
                                    Learn more
                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-center size-12 rounded-xl bg-red-600">
                                <svg className="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                            </div>

                            <div className="mt-5 flex flex-col flex-1">
                                <h3 className="min-h-[3.5rem] text-lg font-semibold text-gray-800 group-hover:text-gray-600">
                                    FOUNDED 3rd March 1996
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                    Paragon Mission, founded on 3rd March, 1996 under Biki-Hakola Paragon
                                    Multipurpose Educational And Social Welfare Society and Registered
                                    under West Bengal Act...
                                </p>

                                <span className="mt-auto inline-flex items-center gap-x-1.5 pt-4 text-sm font-medium text-red-600 group-hover:underline">
                                    Learn more
                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-center size-12 rounded-xl bg-red-600">
                                <svg className="shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                            </div>

                            <div className="mt-5 flex flex-col flex-1">
                                <h3 className="min-h-[3.5rem] text-lg font-semibold text-gray-800 group-hover:text-gray-600">
                                    FOUNDED 3rd March 1996
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                    Paragon Mission, founded on 3rd March, 1996 under Biki-Hakola Paragon
                                    Multipurpose Educational And Social Welfare Society and Registered
                                    under West Bengal Act...
                                </p>

                                <span className="mt-auto inline-flex items-center gap-x-1.5 pt-4 text-sm font-medium text-red-600 group-hover:underline">
                                    Learn more
                                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

            <div className="bg-gray-100">
                <div className="max-w-[85rem] px-4 pt-12 sm:px-6 lg:px-8 mx-auto text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Notice Board
                    </h1>
                    <p className="mt-1 text-lg font-medium text-gray-600">
                        নোটিশ বোর্ড
                    </p>
                </div>

                <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        <div className="group rounded-2xl bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div>
                                <Link href={"/notice"} className="text-lg font-semibold text-gray-800 group-hover:text-red-600">
                                    Test data
                                </Link>
                                <p className="mt-2 text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque ipsum voluptas doloribus consequatur! Eius deserunt sed, possimus accusantium harum consequatur blanditiis?
                                </p>
                            </div>

                            <div className="mt-4">
                                <Link href="/notice" className="text-sm font-medium text-purple-600 hover:underline">
                                    Click here to read
                                </Link>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm font-medium text-red-600">
                                    December 15 2025
                                </p>
                            </div>
                        </div>


                        <div className="group rounded-2xl bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div>
                                <Link href={"/notice"} className="text-lg font-semibold text-gray-800 group-hover:text-red-600">
                                    Test data
                                </Link>
                                <p className="mt-2 text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque ipsum voluptas doloribus consequatur! Eius deserunt sed, possimus accusantium harum consequatur blanditiis?
                                </p>
                            </div>

                            <div className="mt-4">
                                <Link href="/notice" className="text-sm font-medium text-purple-600 hover:underline">
                                    Click here to read
                                </Link>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm font-medium text-red-600">
                                    December 15 2025
                                </p>
                            </div>
                        </div>
                        <div className="group rounded-2xl bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div>
                                <Link href={"/notice"} className="text-lg font-semibold text-gray-800 group-hover:text-red-600">
                                    Test data
                                </Link>
                                <p className="mt-2 text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque ipsum voluptas doloribus consequatur! Eius deserunt sed, possimus accusantium harum consequatur blanditiis?
                                </p>
                            </div>

                            <div className="mt-4">
                                <Link href="/notice" className="text-sm font-medium text-purple-600 hover:underline">
                                    Click here to read
                                </Link>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm font-medium text-red-600">
                                    December 15 2025
                                </p>
                            </div>
                        </div>
                        <div className="group rounded-2xl bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div>
                                <Link href={"/notice"} className="text-lg font-semibold text-gray-800 group-hover:text-red-600">
                                    Test data
                                </Link>
                                <p className="mt-2 text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda neque ipsum voluptas doloribus consequatur! Eius deserunt sed, possimus accusantium harum consequatur blanditiis?
                                </p>
                            </div>

                            <div className="mt-4">
                                <Link href="/notice" className="text-sm font-medium text-purple-600 hover:underline">
                                    Click here to read
                                </Link>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm font-medium text-red-600">
                                    December 15 2025
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage