import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MainLayout = ({ children, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseIcon = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="layout-container ">
      <div
        className={isCollapsed ? "ctrl-btn lst" : "ctrl-btn"}
        onClick={handleCollapseIcon}
      >
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </div>
      <div className="sidebar-boxxx">
        <Sidebar isCollapsed={isCollapsed} onLogout={onLogout} />
      </div>
      <div className="nav-cild">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
