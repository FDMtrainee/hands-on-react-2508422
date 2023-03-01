import { useState } from 'react';

export default () => {
  // 0 here is to initialize 'count' variable with a value 0
  const [count, setCount] = useState(0)
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      //{( () => {
      //  if (count === 0) {
      //    return "Click to support";
      //  } else {
      //    return `Supported ${count} times`;
      //  }
      //})()}
      {count === 0 ? "Click to support": `Supported ${count} times`}
    </button>
  )
}
