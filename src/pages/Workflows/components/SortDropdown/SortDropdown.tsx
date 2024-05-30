import classNames from "classnames";
import "./SortDropdown.styles.css";

import { useState } from "react";
import { Popover } from "react-tiny-popover";
import ArrowDownIcon from "src/icons/ArrowDownIcon";
import { SortColumns, SortDropdownProps } from "./SortDropdown.types";

const SORT_OPTIONS: Array<{ label: string; value: SortColumns }> = [
  { label: "Type", value: "type" },
  { label: "Name", value: "name" },
  { label: "Last Updated", value: "lastUpdated" },
];

const SortDropdown = ({ config, onChange }: SortDropdownProps) => {
  const [open, setOpen] = useState(false);

  const handleSortButtonClick = () => setOpen((currOpen) => !currOpen);

  const handleClickOutside = () => setOpen(false);

  const handleSortOptionClick = (optionValue: SortColumns) => () => {
    if (config?.column === optionValue) {
      onChange({
        column: optionValue,
        direction: config?.direction === "asc" ? "desc" : "asc",
      });
    } else {
      onChange({ column: optionValue, direction: "asc" });
    }
  };

  return (
    <Popover
      isOpen={open}
      positions={["bottom", "left"]}
      padding={10}
      content={
        <div className="sort-dropdown">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              className={classNames("option", {
                selected: config?.column === option.value,
              })}
              onClick={handleSortOptionClick(option.value)}
            >
              {option.label}
              {config?.column === option.value ? (
                <div>{config?.direction === "asc" ? "⬆️" : "⬇️"}</div>
              ) : (
                ""
              )}
            </button>
          ))}
        </div>
      }
      onClickOutside={handleClickOutside}
    >
      <button className="sort-dropdown-button" onClick={handleSortButtonClick}>
        Sort <ArrowDownIcon className={classNames("icon", { open })} />
      </button>
    </Popover>
  );
};

export default SortDropdown;
