import PageContainer from "src/components/PageContainer";
import ArrowDownIcon from "src/icons/ArrowDownIcon";
import { capitalize } from "lodash";
import { relativeTimeFromDates } from "src/utils/date";
import TagBadge from "src/components/TagBadge/TagBadge";
import EditIcon from "src/icons/EditIcon";
import DeleteIcon from "src/icons/DeleteIcon";
import useWorkflows from "src/hooks/useWorkflows/useWorkflows";

const Workflows = () => {
  const {
    data: workflows,
    isLoading: isLoadingWorkflows,
    initialized: initializedWorkflows,
  } = useWorkflows();

  console.log("workflows!!!", workflows);

  return (
    <PageContainer
      title="Workflows"
      actions={
        <div className="flex gap-2">
          <button className="btn gap-2">
            Sort <ArrowDownIcon />
          </button>
          <input className="field" placeholder="Search workflows" />
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
            {workflows?.data?.map((data) => (
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
