import { ReactNode } from "react";

export type PageContainerProps = {
  title: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
};
