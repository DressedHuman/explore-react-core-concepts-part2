import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count +1;
        setCount(newCount);
    };

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    };


    return (
        <div style={{border: "2px solid goldenrod", backgroundColor: "#dddeee", padding: "20px", borderRadius: "12px"}}>
            <h3 style={{margin: "0px auto 10px"}}>Counter : {count}</h3>
            <div style={{display: "flex", gap: "12px"}}>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleReduce}>Reduce</button>
            </div>
        </div>
    )
}