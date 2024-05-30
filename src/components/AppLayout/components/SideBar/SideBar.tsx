import "./Sidebar.styles.css";

import AddIcon from "src/icons/AddIcon";
import { SIDEBAR_MENU_OPTIONS } from "./constants";

const SideBar = () => {
  const handleNewWorkflowClick = () => alert("New workflow clicked");

  return (
    <div className="sidebar">
      <a href="/" className="logo-container">
        <div className="logo" />
        <h5 className="title">AirOps</h5>
      </a>
      <button className="new-button" onClick={handleNewWorkflowClick}>
        New <AddIcon />
      </button>
      <div>
        {SIDEBAR_MENU_OPTIONS.map((option) => (
          <a key={option.label} href={option.path} className="menu-option">
            {option.IconComponent && <option.IconComponent />}
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
