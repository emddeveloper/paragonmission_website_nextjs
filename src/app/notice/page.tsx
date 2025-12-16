import Link from 'next/link'
import React from 'react'

const Notice = () => {
  return (
    <div>
        <div className="min-h-screen bg-gray-50">
  <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">

    <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Sample Notice 6
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        By <span className="font-medium text-blue-600">Admin</span> · January 31, 2025
      </p>

      <div className="prose prose-gray max-w-none mt-6">
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>

        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          Vivamus elementum semper nisi.
        </p>

        <p>
          Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
          consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        
      </div>
    </article>

    <div className="mt-8 flex justify-between text-sm">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
      >
        ← Home
      </Link>

      {/* <Link
        href="#"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
      >
        Next →
      </Link> */}
    </div>

    <section className="mt-12 rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">
        Leave a Comment
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="mt-6 space-y-5">
        <textarea
          rows={5}
          placeholder="Write your comment..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <input
            type="text"
            placeholder="Name *"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <input
            type="url"
            placeholder="Website"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="rounded border-gray-300" />
          Save my name, email, and website for next time.
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Post Comment
        </button>
      </form>
    </section>

  </div>
</div>

    </div>
  )
}

export default Notice