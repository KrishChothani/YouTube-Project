import React from 'react'
import { Outlet } from 'react-router-dom';
import AvatarAndChannelDetail from './Components/Channel/AvatarAndChannelDetail';
import ChannelPageListSelection from './Components/Channel/ChannelPageListSelection';
import CoverImage from './Components/Channel/CoverImage';

function UserProfile() {
  return (
    <>
      {/* <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <Header />
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <Left_Header /> */}
          <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <CoverImage />
            <div className="px-4 pb-4">
              <AvatarAndChannelDetail />
              <ChannelPageListSelection />
                <Outlet />
              {/* <AllVideoMiddleSection /> */}
            </div>
          </section>
        {/* </div>
      </div> */}
    </>
  );
}

export default UserProfile
