export type SortColumns = "type" | "name" | "lastUpdated";

export type SortConfig = {
  column: SortColumns;
  direction: "asc" | "desc";
} | null;

export type SortDropdownProps = {
  config: SortConfig;
  onChange: (config: SortConfig) => void;
};
