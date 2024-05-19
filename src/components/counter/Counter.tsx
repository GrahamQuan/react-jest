import { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);
  const [userInput, setUserInput] = useState(0);

  return (
    <div>
      <h2>Counter: {num}</h2>
      <button type="button" onClick={() => setNum((prev) => prev + 1)}>
        increment
      </button>
      <input
        type="number"
        name="userInput"
        value={userInput}
        onChange={(e) => setUserInput(Number(e.target.value))}
      />
      <button type="button" onClick={() => setNum(userInput)}>
        submit
      </button>
    </div>
  );
}
