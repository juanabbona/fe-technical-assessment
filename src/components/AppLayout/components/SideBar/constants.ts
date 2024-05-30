import AnalyticsIcon from "src/icons/AnalyticsIcon";
import DataIcon from "src/icons/DataIcon";
import SettingsIcon from "src/icons/SettingsIcon";

export const SIDEBAR_MENU_OPTIONS = [
  {
    label: "Data",
    path: "/data",
    IconComponent: DataIcon,
  },
  {
    label: "Monitoring",
    path: "/monitoring",
    IconComponent: AnalyticsIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    IconComponent: SettingsIcon,
  },
];
