import React from 'react'
import Header from '../../Components/Header/Header';
import Left_Header from '../../Components/Left_Header/Left_Header';
import CoverImage from '../../Components/CoverImage';
import AvatarAndChannelDetail from '../../Components/AvatarAndChannelDetail';
import ChannelPageListSelection from '../../Components/ChannelPageListSelection';
import AllVideoMiddleSection from '../../Components/allVideoMiddleSection';

function ChannelVideoListPage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1144250/pexels-photo-1144250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1115824/pexels-photo-1115824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <link
        rel="preload"
        as="image"
        href="https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div class="h-screen overflow-y-auto bg-[#121212] text-white">
        <Header />
        <div class="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <Left_Header />
          <section class="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <CoverImage />
            <div class="px-4 pb-4">
              <AvatarAndChannelDetail />
              <ChannelPageListSelection />
              <AllVideoMiddleSection />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ChannelVideoListPage
