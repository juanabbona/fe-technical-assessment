export const parseOutput = (output: string | object) => {
  if (typeof output === "string") {
    let strOutput = output;

    if (strOutput.startsWith("```json"))
      strOutput = strOutput.replace("```json", "").replace("```", "");

    if (strOutput.endsWith("```")) strOutput = strOutput.replace("```", "");

    return JSON.parse(strOutput);
  }

  return output;
};
