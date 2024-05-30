export type WorkflowsData = {
  count: number;
  data: Array<{
    type: string;
    name: string;
    tags: Array<{
      name: string;
      color: string;
    }>;
    lastUpdated: number;
    id: number;
  }>;
};
