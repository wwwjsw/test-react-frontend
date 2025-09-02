import QuestionHeader from '@/components/QuestionHeader';
import type { EggDrop } from '@/types/EggDrop';
import type { EggSimulation } from '@/types/EggSimulation';
import React, { useState } from 'react';

const Question5 = () => {
  const [simulation, setSimulation] = useState<EggSimulation>();

  // Função para simular a queda dos ovos
  const simulateEggDrops = () => {
    const criticalFloor = 70;
    const dropsHistory: EggDrop[] = [];
    // 14+13+12+11+10+9+8+7+6+5+4+3+2+1 = 105 
    const firstJump = 14
    let currentFloor = firstJump;
    let totalDrops = 0;
    let egg1Broken = false;
    let lastSafeFloor = 0;

    // while we have the egg1 
    while (!egg1Broken && currentFloor <= 100) {
      totalDrops++;
      const isCurrentFloorHigherThanCritical = currentFloor > criticalFloor
      dropsHistory.push({
        egg: 1,
        floor: currentFloor,
        result: isCurrentFloorHigherThanCritical ? 'BROKEN' : 'SAFE'
      });

      if (isCurrentFloorHigherThanCritical) {
        egg1Broken = true;
      } else {
        lastSafeFloor = currentFloor;
        currentFloor += (firstJump - totalDrops); // eg: 14+13...27+12...39+11
      }
    }

    // egg2 one floor by floor until find
    let testFloor = lastSafeFloor + 1;
    while (testFloor <= 100 && testFloor <= currentFloor) {
      totalDrops++;
      const isCurrentFloorHigherThanCritical = testFloor > criticalFloor;
      dropsHistory.push({
        egg: 2,
        floor: testFloor,
        result: isCurrentFloorHigherThanCritical ? 'BROKEN' : 'SAFE'
      });

      if (isCurrentFloorHigherThanCritical) {
        return { drops: dropsHistory, totalDrops, foundFloor: testFloor - 1 };
      }
      testFloor++;
    }

    return {
      drops: dropsHistory,
      totalDrops,
      foundFloor: testFloor - 1
    };
  };

  const runSimulation = () => {
    // const result = simulateEggDrops();
    const { foundFloor, totalDrops, drops } = simulateEggDrops()
    setSimulation({
      foundFloor,
      totalDrops,
      drops,
    });
  };

  return (
    <>
        <QuestionHeader />
        <div className="default-card-col">
            <h1>Question 5</h1>
            <p>Find the most higher floor that an egg can be dropped.</p>
            <button
                onClick={runSimulation}
                className="default-btn"
            >
                Run
            </button>
            {simulation && (
              <div className="default-card-content">
                <div>
                    <div><strong>Found floor:</strong> {simulation.foundFloor}</div>
                    <div><strong>Total drops:</strong> {simulation.totalDrops}</div>
                </div>

                <div className="mt-4">
                    <ul>
                        {simulation.drops.map((drop, index) => (
                            <li key={index}>
                            Egg {drop.egg} - Floor {drop.floor} - {drop.result}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            )}
        </div>
    </>
  );
};

export default Question5;
