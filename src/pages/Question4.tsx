import QuestionHeader from "@/components/QuestionHeader";
import { useState } from "react";

function isOpeningBracket(char: string): boolean {
  return char === "(" || char === "{" || char === "[";
}

function isClosingBracket(char: string): boolean {
  return char === ")" || char === "}" || char === "]";
}

function getMatchingOpening(char: string): string {
  switch (char) {
    case ")":
      return "(";
    case "}":
      return "{";
    case "]":
      return "[";
    default:
      return "";
  }
}

function isValidBrackets(input: string): boolean {
  const bracketStack: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];

    if (isOpeningBracket(currentChar)) {
      bracketStack.push(currentChar);
    } else if (isClosingBracket(currentChar)) {
      if (bracketStack.length === 0) {
        return false;
      }

      const lastUnclosedBracket = bracketStack.pop();
      const requiredOpeningBracket = getMatchingOpening(currentChar);

      if (lastUnclosedBracket !== requiredOpeningBracket) {
        return false;
      }
    }
  }

  return bracketStack.length === 0;
}

function Question4() {
  const [testInput, setTestInput] = useState("{[]}");
  const [result, setResult] = useState<boolean | null>(null);

  const handleClickTest = () => {
    const actualResult = isValidBrackets(testInput);
    setResult(actualResult);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(null);
    setTestInput(e.target.value);
  };

  return (
    <>
      <QuestionHeader />
      <div className="default-card-col">
        <h1>Question 4</h1>
        <p>JavaScript function to validate if brackets are properly opened and closed.</p>

        <div>
          <div className="flex gap-4 items-center mb-4">
            <input
              type="text"
              value={testInput}
              onChange={handleInputChange}
              placeholder="Enter brackets to test"
              className="default-input flex-1"
            />
            <button onClick={handleClickTest} className="default-btn-info">
              Test
            </button>
          </div>

          {result !== null ? (
            <div
              className={`p-3 rounded mb-4 ${
                result ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              <strong>Result:</strong> isValidBrackets("{testInput}") = {result.toString()}
            </div>
          ) : (
            <div>
              <p>Click test button to check.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Question4;
