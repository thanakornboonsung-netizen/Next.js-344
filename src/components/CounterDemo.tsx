"use client";

import { useState } from "react";

export default function CounterDemo() {
    const [count, setCount] = useState(0);

    function hadleClick(){
        //setCount(count + 1);
        //setCount(count + 1);
        //setCount(count + 1);

        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    }
    return (
        <button type="button" onClick={hadleClick} >
            คลิก { count } ครั้ง
        </button>
    );
}
