import AddIcon from "src/icons/AddIcon";
import { SIDEBAR_MENU_OPTIONS } from "./constants";

const SideBar = () => {
  return (
    <div className="flex flex-col border-solid border-r-2 border-gray-100 w-60 gap-3 p-4">
      <a href="/" className="flex items-center gap-2">
        <div className="w-9 h-9 bg-purple-500 rounded" />
        <h5 className="text-base font-medium">AirOps</h5>
      </a>
      <button className="btn w-full gap-1 shadow min-h-8 font-medium">
        New <AddIcon />
      </button>
      <div>
        {SIDEBAR_MENU_OPTIONS.map((option) => (
          <a
            key={option.label}
            href={option.path}
            className="flex items-center gap-2 text-gray-500 text-sm min-h-8"
          >
            {option.IconComponent && <option.IconComponent />}
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
