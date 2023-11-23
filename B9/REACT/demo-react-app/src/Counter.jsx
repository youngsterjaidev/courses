import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Adding Counter</div>
      <h1>Counter - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default Counter;
