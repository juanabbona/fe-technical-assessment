import PageContainer from "src/components/PageContainer";
import ArrowDownIcon from "src/icons/ArrowDownIcon";

const Workflows = () => {
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
      {" "}
      content!!!
    </PageContainer>
  );
};

export default Workflows;
