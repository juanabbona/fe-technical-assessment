import "./PageContainer.styles.css";

import { PageContainerProps } from "./PageContainer.types";

const PageContainer = ({ title, actions, children }: PageContainerProps) => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">{title}</h1>
        {actions}
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageContainer;
