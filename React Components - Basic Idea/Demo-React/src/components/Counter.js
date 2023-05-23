import { useState } from "react";

const getTitle = (count) => {
  switch (count) {
    case 1:
      return "First Blood";
    case 2:
      return "Double Kill";
    case 3:
      return "Thriple Kill";
    case 4:
      return "Quadra Kill";
    case 5:
      return "PENTAKILL";
    default:
      return "Counter";
  }
};

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  const incrementCounterHandler = () => {
    setCounter((state) => state + 1);
  };

  const decrementCounterHandler = () => {
    setCounter((state) => state - 1);
  };

  const clearCounterHandler = () => {
    setCounter(0);
  };

  return (
    <div>
      <p style={{ fontSize: Math.max(counter, 1) + "rem" }}>
        {counter > 5 ? "Godlike" : getTitle(counter)}: {counter}
      </p>
      <button onClick={decrementCounterHandler}>-</button>
      {counter !== 0 ? <button onClick={clearCounterHandler}>0</button> : null}
      {counter < 10 ? (
        <button onClick={incrementCounterHandler}>+</button>
      ) : null}
    </div>
  );
}
