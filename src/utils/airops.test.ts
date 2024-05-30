import { parseOutput } from "./airops";

describe("parseOutput", () => {
  it("should return the parsed object when output is a valid JSON string", () => {
    const output = '{"name": "John", "age": 30}';
    const expectedOutput = { name: "John", age: 30 };
    expect(parseOutput(output)).toEqual(expectedOutput);
  });

  it("should return the output when output is already an object", () => {
    const output = { name: "John", age: 30 };
    expect(parseOutput(output)).toEqual(output);
  });

  it("should return null when output is an empty string", () => {
    const output = "";
    expect(parseOutput(output)).toBeNull();
  });

  it("should return the parsed object when output is a valid JSON string beggining with ```json", () => {
    const output = '```json \n {"name": "John", "age": 30} ```';
    const expectedOutput = { name: "John", age: 30 };
    expect(parseOutput(output)).toEqual(expectedOutput);
  });

  it("should return null when output is an invalid JSON string", () => {
    const output = '{"name": "John", "age": 30'; // missing closing brace
    expect(parseOutput(output)).toBeNull();
  });
});
