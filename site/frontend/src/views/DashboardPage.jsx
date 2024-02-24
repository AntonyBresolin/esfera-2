import React from "react";
import Topbar from "../components/navbar/Topbar";
import NoGroupScreen from "./NoGroupScreen";


const DashboardPage = () => {
  return (
    <div className="bg-defaultBg flex overflow-hidden">
      <Topbar />
      <div className="w-full mt-[61px] mx-4 pb-4">
        <NoGroupScreen />
      </div>
    </div>
  );
}

export default DashboardPage;