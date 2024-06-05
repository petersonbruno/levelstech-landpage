import React from 'react'

const FAQ = () => (
  <div className="space-y-4">
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          1. What services do you offer?
        </h2>

        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
        We specialize in custom system development, web app development,
        and mobile app development,
        providing innovative and scalable solutions tailored to your business needs.
      </p>
    </details>

    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          2. What technologies do you use?
        </h2>

        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
        Our team utilizes the latest technologies including Java, C#,
        Python for system development; React, Angular, Node.js for web apps;
        and Swift, Kotlin, React Native for mobile apps.
      </p>
    </details>
    <details
      className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-lg font-medium text-gray-900">
          3. Who are your typical clients?
        </h2>

        <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">
        We serve a diverse clientele ranging from startups and small businesses to
        large enterprises, helping them achieve digital transformation and
        business growth through custom software solutions.
      </p>
    </details>
  </div>

);
export default FAQ