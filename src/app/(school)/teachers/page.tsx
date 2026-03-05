


"use client";

import Image from "next/image";

const faculty = [
    { id: 1, name: "ANANYA SEN", qualification: "M.A (ENG), B.Ed", designation: "AT" },
    { id: 2, name: "SUBHASISH PAL", qualification: "B.A (ENG), D.El.Ed", designation: "AT" },
    { id: 3, name: "DEBASHIS DUTTA", qualification: "M.Sc (MATH), B.Ed", designation: "AT" },
    { id: 4, name: "SOUMYA MUKHERJEE", qualification: "B.Sc (PHY), B.Ed", designation: "AT" },
    { id: 5, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 6, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 7, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 8, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 9, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 10, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 11, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 12, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },
    { id: 13, name: "TAPAN BANERJEE", qualification: "M.A (HIS), B.Ed", designation: "AT" },

];

export default function Teachers() {
    return (
        <section className="bg-slate-50 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Image */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-3xl h-[200px] sm:h-[260px] rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/20211112_133040-r0nyp0e7200urhvdgzgxiab4iq2erm5u84oza5dmm0.jpg"
                            alt="Teachers Responsibility"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Teachers Responsibility */}
                <div className="text-center mb-10">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-red-700 underline">
                        TEACHER RESPONSIBILITY (শ্রেণী শিক্ষিকা /শিক্ষকের দায়িত্ব )
                    </h1>




                    <div className=" mt-10 group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <ul className=" max-w-xl mx-auto text-left space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                            <li>• Teachers must maintain discipline and a healthy learning environment.</li>
                            <li>• Regular attendance and punctuality are mandatory.</li>
                            <li>• Continuous evaluation and student mentoring are essential duties.</li>
                            <li>• Teachers should coordinate with parents when necessary.</li>
                        </ul>

                    </div>
                </div>

                <div className="px-6 py-4  text-center">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-red-700 underline">
                            PARAGON MISSION FACULTY LIST
                        </h1>
                    </div>
                {/* Faculty List */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                    

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-lg">
                            <thead className="bg-slate-200 text-slate-700">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">No</th>
                                    <th className="px-4 py-3 text-left font-semibold">Faculty Name</th>
                                    <th className="px-4 py-3 text-left font-semibold">Qualification</th>
                                    <th className="px-4 py-3 text-left font-semibold">Designation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {faculty.map((item) => (
                                    <tr key={item.id} className="even:bg-slate-50 hover:bg-blue-50 transition">
                                        <td className="px-4 py-3 text-slate-600">{item.id}</td>
                                        <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                                            {item.qualification}
                                        </td>
                                        <td className="px-4 py-3 text-slate-700">{item.designation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}


