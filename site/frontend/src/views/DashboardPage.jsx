import React from "react";
import Topbar from "../components/navbar/Topbar";


const DashboardPage = () => {
  return (
    <div className="bg-defaultBg flex overflow-hidden">
      <Topbar />
      <div className="w-full h-screen bg-defaultBg mt-[61px]">
        <h1 className="text-4xl text-primary text-center mt-10">Dashboard</h1>
      </div>
    </div>
  );
}

export default DashboardPage;