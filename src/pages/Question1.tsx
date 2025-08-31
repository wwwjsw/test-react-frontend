import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

export default function Question1() {
    const [arr, setArr] = useState([1, 2, 2, "test", 33, 33, 23, "question1", "question2", "question1"])
    const [duplicates, setDuplicates] = useState<unknown[]>([])
    const countRef = useRef(0);

    const findDuplicates = useCallback(() => {
        countRef.current += 1;
        console.log(`callback was called ${countRef.current} times`)
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
        <div>
            <nav>
                <Link to="/">← Back to Home</Link>
            </nav>
            <h1>Question 1</h1>
            <input
                type="text"
                value={arr.toString()}
                onChange={handleInputChange} />
            <p>Duplicates: {duplicates.toString() || 'No duplications'}</p>
        </div>
    )
}

