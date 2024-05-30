import { WorkflowsData } from "src/hooks/useWorkflows";
import { SortConfig } from "./components/SortDropdown";

export const filterWorkflows = (
  workflows: WorkflowsData["data"],
  query: string
) => {
  return workflows.filter((workflow) => {
    return workflow.name.toLowerCase().includes(query.toLowerCase());
  });
};

export const sortWorkflows = (
  workflows: WorkflowsData["data"],
  sortConfig: SortConfig
) => {
  if (!sortConfig) return workflows;

  return workflows.sort((a, b) => {
    if (sortConfig.column === "lastUpdated") {
      return sortConfig.direction === "asc"
        ? a.lastUpdated - b.lastUpdated
        : b.lastUpdated - a.lastUpdated;
    }

    return sortConfig.direction === "asc"
      ? a[sortConfig.column].localeCompare(b[sortConfig.column])
      : b[sortConfig.column].localeCompare(a[sortConfig.column]);
  });
};
