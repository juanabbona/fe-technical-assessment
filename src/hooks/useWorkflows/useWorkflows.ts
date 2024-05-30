import AirOps from "@airops/airops-js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { WorkflowsData } from "./useWorkflows.types";
import { WORKFLOWS_QUERY_KEY } from "src/constants/queryKeys";
import { parseOutput } from "src/utils/airops";

const WORKFLOWS_COUNT = 10;

const useWorkflows = () => {
  const [initialized, setInitialized] = useState(false);

  const airopsInstance = useRef<AirOps | null>(null);

  useEffect(() => {
    airopsInstance.current = new AirOps();

    setInitialized(true);
  }, []);

  const fetchWorkflows = async () => {
    const execution = await airopsInstance.current?.apps.execute({
      appId: "bf402df4-13f3-4f87-8613-d6e4333e3b02",
      version: 3,
      payload: {
        inputs: {
          count: WORKFLOWS_COUNT,
        },
      },
    });

    const result = await execution?.result();

    const parsedOutput = parseOutput(result?.output || {});

    return parsedOutput as WorkflowsData;
  };

  const workflowsQuery = useQuery({
    queryKey: [WORKFLOWS_QUERY_KEY],
    queryFn: fetchWorkflows,
    enabled: initialized,
  });

  return { initialized, ...workflowsQuery };
};

export default useWorkflows;
