import React, { useState } from "react";

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Лічильник кліків</h2>
      <p>Поточне значення: <strong>{count}</strong></p>
      <button onClick={increase} style={{ marginRight: "10px" }}>
        Збільшити
      </button>
      <button onClick={decrease}>
        Зменшити
      </button>
    </div>
  );
}

export default Counter;