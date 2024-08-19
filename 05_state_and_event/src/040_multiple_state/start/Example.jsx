import { useState } from "react";
const Example = () => {
    const [ countA, setCountA ] = useState(0);
    const [ countB, setCountB ] = useState(0);
    const [ countC, setCountC ] = useState(0);
    return (
        <>
            <p>ボタンAを{countA}回押しました！</p>
            <button onClick={() => {
                setCountA(countA + 1);
            }} 
            >countA</button>

            <p>ボタンBを{countB}回押しました！</p>
            <button onClick={() => {
                setCountB(countB + 1);
            }} 
            >CountB</button>

            <p>ボタンCを{countC}回押しました！</p>
            <button onClick={() => {
                setCountC(countC + 1);
            }} 
            >countC</button>
        </>
    )
};

export default Example;
