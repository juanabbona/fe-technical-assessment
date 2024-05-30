import { PageContainerProps } from "./PageContainer.types";

const PageContainer = ({ title, actions, children }: PageContainerProps) => {
  return (
    <div>
      <div className="flex border-b border-solid border-gray-100 m-w-full px-4 py-6 justify-between items-center">
        <h1 className="font-bold text-3xl">{title}</h1>
        {actions}
      </div>
      <div className="px-4 py-6">{children}</div>
    </div>
  );
};

export default PageContainer;
