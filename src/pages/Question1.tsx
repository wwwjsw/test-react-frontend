import QuestionHeader from "@/components/QuestionHeader";
import { useCallback, useEffect, useState } from "react"

export default function Question1() {
    const [arr, setArr] = useState([1, 2, 2, "test", 33, 33, 23, "question1", "question2", "question1"])
    const [duplicates, setDuplicates] = useState<unknown[]>([])

    const findDuplicates = useCallback(() => {
        const arrWithNoDuplicates = new Set()
        const duplicates = []
        for (const item of arr) {
            if (arrWithNoDuplicates.has(item)) {
                duplicates.push(item)
            } else {
                arrWithNoDuplicates.add(item)
            }
        }
        setDuplicates(duplicates)
    }, [arr])
    
    useEffect(() => {
        findDuplicates()
    }, [findDuplicates]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        setArr(value.split(','))
    }

    return (
        <>
            <QuestionHeader />
            <div className="default-card-col">
                <h1>Question 1</h1>
                <p>Write a javascript function that finds the duplicate items in any given array.</p>
                <input
                    className="default-input"
                    type="text"
                    value={arr.toString()}
                    onChange={handleInputChange}
                    autoFocus/>
                <p>Duplicates: {duplicates.toString() || 'No duplicates'}</p>
            </div>
        </>
        
    )
}

