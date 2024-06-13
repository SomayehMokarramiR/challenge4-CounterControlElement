import { useState } from "react";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;

function Counter() {
  const [step, setStep] = useState(5);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleRest() {
    setStep(1);
    setCount(0);
  }
  return (
    <div style={{ textAlign: "center", fontSize: "15px", margin: "40px 0" }}>
      <span> Step :{step}</span>
      <div style={{ marginBottom: "15px" }}>
        <span>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </span>
      </div>
      <div>
        <button onClick={() => setCount((curCount) => curCount - step)}>
          -
        </button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={() => setCount((curCount) => curCount + step)}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today Is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} day ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 1) && (
        <button onClick={handleRest}>Rest</button>
      )}
    </div>
  );
}
