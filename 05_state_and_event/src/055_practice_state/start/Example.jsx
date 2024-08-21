import { useState } from "react";
const Example = () => {
  const [ count, countSet ] = useState(0);
  const countUp = () => {
    countSet(count + 1);
  }
  const countDown = () => {
    countSet(count - 1);
  }
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: {count}</p>
      <button
        onClick={countUp}  
      >+</button>
      <button
        onClick={countDown}
      >-</button>
    </>
  );
};

export default Example;