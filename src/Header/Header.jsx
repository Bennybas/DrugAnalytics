import React, { useState, useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import { CiViewTable } from "react-icons/ci";
import { TbZoomPan } from "react-icons/tb";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import OverviewPage from "../Overview/OverviewPage";
import { LuMonitorCog } from "react-icons/lu";
import AccTargetting from "../AccTargeting/AccTargetting";
import AccDeepdive from "../AccDeepdive/AccDeepdive";
import Hcp_Home from "../HCP_Home/Hcp_Home";
import HCP_Deepdive from "../HCPDeepdive/HCP_Deepdive";
import RaadTool from "../RaadTool/RaadTool";

const Header = () => {
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || "Overview";
  });

  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  const switchPage = (page, data = null) => {
    setActivePage(page);
    setPageData(data); 
  };

  const cards = [
    {
      title: "Overview",
      Icon: CiViewTable,
      path: "Overview",
    },
    {
      title: "Acc Targeting Independent",
      Icon: TbZoomPan,
      path: "acc_targeting",
    },
    {
      title: "Acc Deepdive",
      Icon: HiOutlineChartBarSquare,
      path: "acc_deepdive",
    },
    {
      title: "HCP Homepage",
      Icon: FaUserDoctor,
      path: "hcp_homepage",
    },
    {
      title: "HCP Deepdive",
      Icon: GrUserAdmin,
      path: "hcp_deepdive",
    },
    {
      title: "RAAD Tool",
      Icon: LuMonitorCog,
      path: "raad_tool",
    },
  ];

  const renderContent = () => {
    switch (activePage) {
      case "Overview":
        return <OverviewPage />;
      case "acc_targeting":
        return <AccTargetting setActivePage={switchPage} />;
      case "acc_deepdive":
        return <AccDeepdive accountId={pageData?.accountId} />;
      case "hcp_homepage":
        return <Hcp_Home setActivePage={switchPage} />;
      case "hcp_deepdive":
        return <HCP_Deepdive Hcp_Id={pageData?.hcp_id}/>;
      case "raad_tool":
        return <RaadTool />
      
    }
  };

  return (
    <div>
      <div className="bg-grey-100 ">
        <header className="bg-gradient-to-br from-[#9bc0e2]/50 to-[#9bc0e2]/90 text-gray-600 flex items-center justify-between px-6 py-3 border-b border-gray-200 shadow-md">
          {/* Logo Section */}
          <img src="/chryselys.png" alt="Logo" className="h-12 w-auto" />

          {/* Navigation Cards */}
          <div className="flex flex-row justify-center items-center w-84 gap-1 rounded-3xl bg-white px-1 py-1">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => setActivePage(card.path)}
                className={`flex items-center gap-2 px-4 py-2 rounded-3xl transition-all duration-200 ease-in-out 
                  ${activePage === card.path
                    ? "bg-[#004567] text-[#f0f3f7] text-md"
                    : "text-[#697280] hover:bg-[#004567]/80 hover:text-[#f0f3f7]"
                  }`}
              >
                <card.Icon className="text-md" />
                <span className="text-sm" style={{ fontSize: '11px' }}>{card.title}</span>
              </button>
            ))}
          </div>

          {/* Right Side Section with User Info */}
          <div className="flex flex-row items-center gap-3">
            <div className="text-md">
              <span className="font-light">Hello,</span>
            </div>
            <div className="text-md mr-1">
              <span className="font-medium">Steve</span>
            </div>
            <button className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
              <FcBusinessman className="text-3xl" />
            </button>
          </div>
        </header>
      </div>
      {/* Navigation Content */}
      <main className="mt-4">{renderContent()}</main>
    </div>
  );
};

export default Header;
