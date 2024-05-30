import PageContainer from "src/components/PageContainer";
import { capitalize } from "lodash";
import { relativeTimeFromDates } from "src/utils/date";
import TagBadge from "src/components/TagBadge/TagBadge";
import EditIcon from "src/icons/EditIcon";
import DeleteIcon from "src/icons/DeleteIcon";
import useWorkflows from "src/hooks/useWorkflows/useWorkflows";
import { ChangeEvent, useMemo, useState } from "react";
import SortDropdown, { SortConfig } from "./components/SortDropdown";

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

  const filteredWorkflows = useMemo(
    () =>
      workflows?.data?.filter((data) => {
        return data.name.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    [workflows, searchQuery]
  );

  const sortedWorkflows = useMemo(() => {
    if (!filteredWorkflows) return null;

    if (!sort) return filteredWorkflows;

    return filteredWorkflows.sort((a, b) => {
      if (sort.column === "lastUpdated") {
        return sort.direction === "asc"
          ? a.lastUpdated - b.lastUpdated
          : b.lastUpdated - a.lastUpdated;
      }

      return sort.direction === "asc"
        ? a[sort.column].localeCompare(b[sort.column])
        : b[sort.column].localeCompare(a[sort.column]);
    });
  }, [filteredWorkflows, sort]);

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
                    <button className="btn-icon">
                      <EditIcon />
                    </button>
                    <button className="btn-icon">
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
