import QuestionHeader from "@/components/QuestionHeader";
import { useState } from "react";


const Question6 = () => {
  const [achillesPos, setAchillesPos] = useState(10);
  const [tortoisePos, setTortoisePos] = useState(20);
  const stopScriptAt = 100;

  function moveOn() {
    if (tortoisePos >= stopScriptAt) {
      return;
    }

    setTortoisePos((prevTortoise) => {
      const newTortoise = prevTortoise + 10;
      
      setAchillesPos((prevAchilles) => {
        // need resolve first inside (a - b)
        // consider in first exec  10 + (30 - 10) / 2
        const newAchilles = prevAchilles + (newTortoise - prevAchilles) / 2;
        return newAchilles;
      });

      return newTortoise;
    });
  }

  return (
    <>
        <QuestionHeader />
        <div className="default-card-col align-center">
            <h2>Zeno's Paradox of Achilles and the Tortoise</h2>
            <p>Tortoise stop at 100.00 to limit the execution!</p>
            <button onClick={moveOn} className="default-btn">next step</button>
            <div>
                <div
                    className="transition-all bg-orange-400"
                    style={{ width: `${achillesPos}%` }}
                >
                {achillesPos.toFixed(2)} 🏃
                </div>
                <div
                    className="transition-all bg-green-500"
                    style={{ width: `${tortoisePos}%` }}
                >
                {tortoisePos.toFixed(2)} 🐢
                </div>
            </div>
        </div>
    </>
  );
};

export default Question6;