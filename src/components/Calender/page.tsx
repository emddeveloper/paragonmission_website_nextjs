import React from 'react'

const Calender = () => {
  return (
    <div>
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-md">

    {/* Header */}
    <div className="relative bg-red-600 px-6 py-5 text-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-white">
        School Timings
      </h2>

      {/* Ribbon */}
      <span className="absolute right-0 top-0 origin-top-right rotate-45 translate-x-8 -translate-y-4 bg-green-500 px-8 py-1 text-xs font-semibold text-white">
        MON – SAT
      </span>
    </div>

    {/* Content */}
    <div className="bg-gray-100 px-6 py-8 sm:px-10">
      <ul className="space-y-5">

        {/* Row */}
        <li className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
              ✓
            </span>
            <span className="text-sm sm:text-base font-medium text-gray-800">
              Monday – Friday
            </span>
          </div>
          <span className="text-sm sm:text-base font-semibold text-gray-700">
            11:00 AM – 4:00 PM
          </span>
        </li>

        <li className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
              ✓
            </span>
            <span className="text-sm sm:text-base font-medium text-gray-800">
              Saturday
            </span>
          </div>
          <span className="text-sm sm:text-base font-semibold text-gray-700">
            11:00 AM – 1:30 PM
          </span>
        </li>

        <li className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600">
              ✕
            </span>
            <span className="text-sm sm:text-base font-medium text-gray-800">
              Sunday
            </span>
          </div>
          <span className="text-sm sm:text-base font-semibold text-red-600">
            Holiday
          </span>
        </li>

      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default Calender