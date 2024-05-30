import "./AppLayout.styles.css";

import { AppLayoutProps } from "./AppLayout.types";
import SideBar from "./components/SideBar";

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <SideBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default AppLayout;
