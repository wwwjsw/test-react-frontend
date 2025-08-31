import QuestionHeader from "@/components/QuestionHeader";
import { useState } from "react";

function Question2() {
  const demoArray = ["a", "b", "c", "d"];
  const [isProcessing, setIsProcessing] = useState(false);
  const [output, setOutput] = useState<string[]>([]);

  const handleStartExponentialGrowth = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setOutput([]);
    setOutput([`Starting with: ${JSON.stringify(demoArray)}`]);

    try {
      for (let i = 0; i < demoArray.length; i++) {
        const twoRaisedToI = Math.pow(2, i);
        const delayMiliseconds = twoRaisedToI * 1000;
        await new Promise((resolve) => setTimeout(resolve, delayMiliseconds));
        const message = `Item ${i + 1}: "${demoArray[i]}" (after ${twoRaisedToI} seconds)`;
        setOutput((prev) => [...prev, message]);
      }
      setOutput((prev) => [...prev, "Completed!"]);
    } catch (error) {
      console.error("Error during processing:", error);
      setOutput((prev) => [...prev, "Error occurred during processing"]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <QuestionHeader />
      <div className="default-card-col">
        <h1>Question 2</h1>
        <p>Exponential growth</p>
        <p>
          Example: for {JSON.stringify(demoArray)}, "a" is printed 1 second after the code runs, "b"
          is printed 2 seconds after the code runs, "c" is printed 4 seconds after the code runs,
          etc.
        </p>

        <div className="default-card-col border-1 border-gray-200">
          <button
            onClick={handleStartExponentialGrowth}
            disabled={isProcessing}
            className={isProcessing ? "default-btn cursor-not-allowed" : "default-btn-info"}
          >
            {isProcessing ? "Processing..." : "Start"}
          </button>

          {output.length > 0 && (
            <div>
              <h4>Output:</h4>
              <div>
                {output.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Question2;
