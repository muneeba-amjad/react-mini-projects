import { useState } from "react";
import styles from "./Counter.module.css"
const Counter = () => {
  const [count, setCount] = useState(0);
    const increament = ()=> setCount(count + 1)
    const decreament = ()=> setCount(count - 1)

  return (
    <div className={styles.counterWrapper}>
      <div className={styles.container}>
        <h1 className={styles.number}>{count}</h1>
      </div>
      <div className={styles.btnsContainer}>
        <button onClick={increament} className={styles.increment}>+</button>
        <button onClick={decreament} className={styles.increment}>-</button>
      </div>
    </div>
  );
};

export default Counter;
