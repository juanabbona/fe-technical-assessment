import { AppLayoutProps } from "./AppLayout.types";
import SideBar from "./components/SideBar";

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AppLayout;
