import QuestionHeader from "@/components/QuestionHeader"
import type { CarrotType } from "@/types/CarrotType";

const Question7 = () => {
    function getMaxValue(carrotTypes: CarrotType[], maxCapacityInKg: number) {
        const bestAtWeight = Array(maxCapacityInKg + 1).fill(0);
        for (let w = 1; w <= maxCapacityInKg; w++) {
            for (const carrot of carrotTypes) {
                if (carrot.kg <= w) {
                    const previousBest = bestAtWeight[w - carrot.kg];
                    const newBestValue = previousBest + carrot.price;
                    
                    console.log(`Weight ${w}kg: considering carrot ${carrot.kg}kg for ${carrot.price}, new best: ${newBestValue}, previous best: ${previousBest}`);
                    
                    bestAtWeight[w] = Math.max(bestAtWeight[w], newBestValue);
                }
            }
        }
        console.log(bestAtWeight);
        return bestAtWeight[maxCapacityInKg];
    }

    const carrotTypes = [
        { kg: 5, price: 100 },
        { kg: 7, price: 150 },
        { kg: 3, price: 70 },
    ];
    const maxCapacityInKg = 36;
    const maxValue = getMaxValue(carrotTypes, maxCapacityInKg);
    console.log(maxValue);


    return (
        <>
            <QuestionHeader />
            <h1>Question 7</h1>
            <p>Maximum value of a bag</p>
            <p>Max Value: {maxValue} - Logs for complete history!</p>
            <hr />
            {carrotTypes.map((carrot, index) => (
                <div key={index}>
                    <p>Carrot Type {index + 1} | Weight: {carrot.kg}kg | Price: ${carrot.price}</p>
                </div>
            ))}
            <p>Max Capacity of the bag: {maxCapacityInKg} kg</p>
        </>
    )
}

export default Question7