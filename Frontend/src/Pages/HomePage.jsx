import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Left_Header from "../Components/Left_Header/Left_Header";
import axios from 'axios';
import AllVideoMiddleSection from "../Components/allVideoMiddleSection";

function HomePage() {
  
  return (
    <>
      {/* <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <Header />    
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <Left_Header /> */}
          <AllVideoMiddleSection />
        {/* </div>
      </div> */}
    </>
  );
}

export default HomePage;
