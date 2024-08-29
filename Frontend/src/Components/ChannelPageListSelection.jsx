import React from 'react'

function ChannelPageListSelection() {
  return (
    <>
      <ul class="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
        <li class="w-full">
          <button class="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
            Videos
          </button>
        </li>
        <li class="w-full">
          <button class="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
            Playlist
          </button>
        </li>
        <li class="w-full">
          <button class="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">
            Tweets
          </button>
        </li>
        <li class="w-full">
          <button class="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
            Subscribed
          </button>
        </li>
      </ul>
    </>
  );
}

export default ChannelPageListSelection
