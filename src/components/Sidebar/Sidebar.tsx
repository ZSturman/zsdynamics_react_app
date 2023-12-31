import { useEffect, useState } from "react"
import SidebarLink from "./SidebarLink"
import SidebarReumeLink from "./SidebarResumeLink"
import SidebarPaintbucket from "./SidebarPaintbucket"
import PaletteContainer from "./PaletteContainer"
import resumePDF from "../../assets/documents/ZacharySturmanResume.pdf";
import "./Sidebar.scss"

const Sidebar = () => {
  const [showPalette, setShowPalette] = useState(false);

  const togglePalettes = () => {
    setShowPalette(!showPalette);
  };

  return (
    <>
      <div className="sidebar">
        <ul className="icons-list">
          <ul>
            <SidebarReumeLink label="Zachary Sturman Resume" to={resumePDF} />

          </ul>
          <ul className="icons nav-links">
            <SidebarLink label="Home" to="/" />
            <SidebarLink label="Projects" to="/projects" />
            <SidebarLink label="About" to="/about" />
            <SidebarLink label="Contact" to="/contact" />
          </ul>

          <ul className="icons external-links">
            <SidebarLink label="GitHub" to="/" />
            <SidebarLink label="LinkedIn" to="/" />
            <SidebarLink label="TwitterX" to="/" />
            <SidebarLink label="Email" to="/" />
            <SidebarLink label="Phone" to="/" />
          </ul>

          <ul className="icons recreational-links">
            <SidebarPaintbucket
              onTogglePalettes={togglePalettes}
              active={showPalette ? true : false}
            />
          </ul>
        </ul>

        <div className="palette-picker-container">
          {showPalette && (
            <PaletteContainer onTogglePalettes={togglePalettes} />
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
