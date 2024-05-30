import PageContainer from "src/components/PageContainer";
import { capitalize } from "lodash";
import { relativeTimeFromDates } from "src/utils/date";
import TagBadge from "src/components/TagBadge/TagBadge";
import EditIcon from "src/icons/EditIcon";
import DeleteIcon from "src/icons/DeleteIcon";
import useWorkflows from "src/hooks/useWorkflows/useWorkflows";
import { ChangeEvent, useMemo, useState } from "react";
import SortDropdown, { SortConfig } from "./components/SortDropdown";
import { filterWorkflows, sortWorkflows } from "./utils";

const Workflows = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState<SortConfig>(null);

  const {
    data: workflows,
    isLoading: isLoadingWorkflows,
    initialized: initializedWorkflows,
  } = useWorkflows();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortConfigChange = (newSortConfig: SortConfig) =>
    setSort(newSortConfig);

  const handleEditWorkflowClick = () => alert("Edit workflow clicked");

  const handleDeleteWorkflowClick = () => alert("Delete workflow clicked");

  const filteredWorkflows = useMemo(
    () => filterWorkflows(workflows?.data || [], searchQuery),
    [workflows, searchQuery]
  );

  const sortedWorkflows = useMemo(
    () => sortWorkflows(filteredWorkflows, sort),
    [filteredWorkflows, sort]
  );

  return (
    <PageContainer
      title="Workflows"
      actions={
        <div className="flex gap-2">
          <SortDropdown config={sort} onChange={handleSortConfigChange} />
          <input
            className="field"
            placeholder="Search workflows"
            onChange={handleSearchInputChange}
          />
        </div>
      }
    >
      {!initializedWorkflows || isLoadingWorkflows ? (
        <div className="spiner mx-auto my-10" />
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-24">Type</th>
              <th>Name</th>
              <th className="w-40">Tags</th>
              <th className="w-40">Last Updated</th>
              <th className="w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedWorkflows?.map((data) => (
              <tr key={data.id}>
                <td className="text-gray-400">{capitalize(data.type)}</td>
                <td>{data.name}</td>
                <td>
                  <TagBadge tags={data.tags} />
                </td>
                <td className="text-gray-400">
                  {relativeTimeFromDates(
                    new Date(data.lastUpdated * 1000),
                    new Date()
                  )}
                </td>
                <td>
                  <div className="flex gap-2">
                    <button
                      className="btn-icon"
                      onClick={handleEditWorkflowClick}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="btn-icon"
                      onClick={handleDeleteWorkflowClick}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </PageContainer>
  );
};

export default Workflows;
