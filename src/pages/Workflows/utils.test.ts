import { WorkflowsData } from "src/hooks/useWorkflows";
import { filterWorkflows, sortWorkflows } from "./utils";
import { SortConfig } from "./components/SortDropdown";

describe("filterWorkflows", () => {
  it("should return an empty array when no workflows match the query", () => {
    const workflows = [
      { name: "Workflow 1" },
      { name: "Workflow 2" },
      { name: "Workflow 3" },
    ];
    const query = "Non-existent";
    const filteredWorkflows = filterWorkflows(
      workflows as WorkflowsData["data"],
      query
    );
    expect(filteredWorkflows).toEqual([]);
  });

  it("should return the workflows that match the query", () => {
    const workflows = [
      { name: "Workflow 1" },
      { name: "Workflow 2" },
      { name: "Workflow 3" },
    ];
    const query = "Workflow 2";
    const filteredWorkflows = filterWorkflows(
      workflows as WorkflowsData["data"],
      query
    );
    expect(filteredWorkflows).toEqual([{ name: "Workflow 2" }]);
  });

  it("should be case-insensitive when matching the query", () => {
    const workflows = [
      { name: "Workflow 1" },
      { name: "Workflow 2" },
      { name: "Workflow 3" },
    ];
    const query = "workflow 3";
    const filteredWorkflows = filterWorkflows(
      workflows as WorkflowsData["data"],
      query
    );
    expect(filteredWorkflows).toEqual([{ name: "Workflow 3" }]);
  });
});

describe("sortWorkflows", () => {
  it("should return the workflows in the same order when sortConfig is not provided", () => {
    const workflows = [
      { name: "Workflow 1", lastUpdated: 100 },
      { name: "Workflow 2", lastUpdated: 200 },
      { name: "Workflow 3", lastUpdated: 300 },
    ];
    const sortedWorkflows = sortWorkflows(
      workflows as WorkflowsData["data"],
      null
    );
    expect(sortedWorkflows).toEqual(workflows);
  });

  it("should sort the workflows by lastUpdated in ascending order", () => {
    const workflows = [
      { name: "Workflow 1", lastUpdated: 300 },
      { name: "Workflow 2", lastUpdated: 100 },
      { name: "Workflow 3", lastUpdated: 200 },
    ];
    const sortConfig: SortConfig = { column: "lastUpdated", direction: "asc" };
    const sortedWorkflows = sortWorkflows(
      workflows as WorkflowsData["data"],
      sortConfig
    );
    expect(sortedWorkflows).toEqual([
      { name: "Workflow 2", lastUpdated: 100 },
      { name: "Workflow 3", lastUpdated: 200 },
      { name: "Workflow 1", lastUpdated: 300 },
    ]);
  });

  it("should sort the workflows by lastUpdated in descending order", () => {
    const workflows = [
      { name: "Workflow 1", lastUpdated: 300 },
      { name: "Workflow 2", lastUpdated: 100 },
      { name: "Workflow 3", lastUpdated: 200 },
    ];
    const sortConfig: SortConfig = { column: "lastUpdated", direction: "desc" };
    const sortedWorkflows = sortWorkflows(
      workflows as WorkflowsData["data"],
      sortConfig
    );
    expect(sortedWorkflows).toEqual([
      { name: "Workflow 1", lastUpdated: 300 },
      { name: "Workflow 3", lastUpdated: 200 },
      { name: "Workflow 2", lastUpdated: 100 },
    ]);
  });

  it("should sort the workflows by string column in ascending order", () => {
    const workflows = [
      { name: "Workflow 1", type: "Workflow" },
      { name: "Workflow 2", type: "Agent" },
      { name: "Workflow 3", type: "Workflow" },
    ];
    const sortConfig: SortConfig = { column: "type", direction: "asc" };
    const sortedWorkflows = sortWorkflows(
      workflows as WorkflowsData["data"],
      sortConfig
    );
    expect(sortedWorkflows).toEqual([
      { name: "Workflow 2", type: "Agent" },
      { name: "Workflow 1", type: "Workflow" },
      { name: "Workflow 3", type: "Workflow" },
    ]);
  });

  it("should sort the workflows by string column in descending order", () => {
    const workflows = [
      { name: "Workflow 1", type: "Workflow" },
      { name: "Workflow 2", type: "Agent" },
      { name: "Workflow 3", type: "Workflow" },
    ];
    const sortConfig: SortConfig = { column: "type", direction: "desc" };
    const sortedWorkflows = sortWorkflows(
      workflows as WorkflowsData["data"],
      sortConfig
    );
    expect(sortedWorkflows).toEqual([
      { name: "Workflow 1", type: "Workflow" },
      { name: "Workflow 3", type: "Workflow" },
      { name: "Workflow 2", type: "Agent" },
    ]);
  });
});
