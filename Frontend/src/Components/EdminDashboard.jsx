import React from 'react'

function EdminDashboard() {
  return (
    <>
      <div class="w-full overflow-auto">
        <table class="w-full min-w-[1200px] border-collapse border text-white">
          <thead>
            <tr>
              <th class="border-collapse border-b p-4">Status</th>
              <th class="border-collapse border-b p-4">Status</th>
              <th class="border-collapse border-b p-4">Uploaded</th>
              <th class="border-collapse border-b p-4">Rating</th>
              <th class="border-collapse border-b p-4">Date uploaded</th>
              <th class="border-collapse border-b p-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-1"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-1"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Code Master"
                  />
                  <h3 class="font-semibold">
                    JavaScript Fundamentals: Variables and Data Types
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    921 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    49 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                22/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-2"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-2"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="React Ninja"
                  />
                  <h3 class="font-semibold">
                    React Hooks Explained: useState and useEffect
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2520 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    279 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                21/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-3"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-3"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Async Masters"
                  />
                  <h3 class="font-semibold">
                    Mastering Async Await in JavaScript
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    943 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    244 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                20/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-4"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-4"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/2522659/pexels-photo-2522659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Code Crafters"
                  />
                  <h3 class="font-semibold">
                    Building a ToDo App with React and Context API
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    760 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    302 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                19/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-5"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-5"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Tailwind Pro"
                  />
                  <h3 class="font-semibold">
                    Responsive Web Design with Tailwind CSS
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2630 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    317 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                18/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-6"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-6"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Express Learner"
                  />
                  <h3 class="font-semibold">Getting Started with Express.js</h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    137 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    107 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                17/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-7"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-7"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Redux Master"
                  />
                  <h3 class="font-semibold">State Management with Redux</h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1250 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    386 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                16/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-8"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-8"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="API Builder"
                  />
                  <h3 class="font-semibold">
                    Building a RESTful API with Node.js and Express
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2773 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    50 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                15/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-9"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-9"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="React Native Dev"
                  />
                  <h3 class="font-semibold">Introduction to React Native</h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1346 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    353 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                14/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-10"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-10"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Hook Master"
                  />
                  <h3 class="font-semibold">Creating Custom Hooks in React</h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1578 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    294 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                13/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-11"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-11"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144261/pexels-photo-1144261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="CSS Wizard"
                  />
                  <h3 class="font-semibold">
                    Advanced CSS: Flexbox and Grid Layouts
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2506 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    87 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                12/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-12"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-12"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144268/pexels-photo-1144268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Pythonista"
                  />
                  <h3 class="font-semibold">
                    Introduction to Python Programming
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1312 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    399 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                11/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-13"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-13"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Django Master"
                  />
                  <h3 class="font-semibold">
                    Building Scalable Web Applications with Django
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    553 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    219 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                10/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-14"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-14"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="ML Geek"
                  />
                  <h3 class="font-semibold">
                    Deep Dive into Machine Learning Algorithms
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2061 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    359 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                9/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-15"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-15"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="ReactD3"
                  />
                  <h3 class="font-semibold">
                    Creating Interactive UIs with React and D3
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1165 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    10 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                8/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-16"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-16"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Passport Pro"
                  />
                  <h3 class="font-semibold">
                    Node.js Authentication with Passport.js
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1812 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    347 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                7/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-17"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-17"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144235/pexels-photo-1144235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Django Rest API"
                  />
                  <h3 class="font-semibold">
                    Creating RESTful APIs with Django Rest Framework
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1698 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    159 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                6/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-18"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-18"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1144232/pexels-photo-1144232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="JS Ninja"
                  />
                  <h3 class="font-semibold">
                    Advanced JavaScript: Closures and Prototypes
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2393 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    146 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                5/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-19"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-19"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Tableau Master"
                  />
                  <h3 class="font-semibold">Data Visualization with Tableau</h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2137 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    280 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                4/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-20"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-20"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Socket.IO Expert"
                  />
                  <h3 class="font-semibold">
                    Building Real-Time Applications with Socket.IO
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2991 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    155 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                3/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-21"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-21"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="GraphQL Pro"
                  />
                  <h3 class="font-semibold">
                    GraphQL: Building APIs with Query Language
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1095 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    359 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                2/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-22"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-22"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/1115822/pexels-photo-1115822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="MERN Stack"
                  />
                  <h3 class="font-semibold">
                    Full-Stack Development with MERN
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    2375 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    152 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                1/9/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-23"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-23"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="CSS Animations"
                  />
                  <h3 class="font-semibold">
                    Advanced CSS: Animations and Transitions
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    904 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    324 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                31/8/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-24"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-24"
                      class="peer sr-only"
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">
                    Unpublished
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="ML Image"
                  />
                  <h3 class="font-semibold">
                    Machine Learning for Image Recognition
                  </h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    912 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    97 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                30/8/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="group border">
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <label
                    for="vid-pub-25"
                    class="relative inline-block w-12 cursor-pointer overflow-hidden"
                  >
                    <input
                      type="checkbox"
                      id="vid-pub-25"
                      class="peer sr-only"
                      checked=""
                    />
                    <span class="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                  </label>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center">
                  <span class="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">
                    Published
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex items-center gap-4">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="React Patterns"
                  />
                  <h3 class="font-semibold">Advanced React Patterns</h3>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex justify-center gap-4">
                  <span class="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    1391 likes
                  </span>
                  <span class="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    319 dislikes
                  </span>
                </div>
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                29/8/2023
              </td>
              <td class="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div class="flex gap-4">
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                  </button>
                  <button class="h-5 w-5 hover:text-[#ae7aff]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EdminDashboard
