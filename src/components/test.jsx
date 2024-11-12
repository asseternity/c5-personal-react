import { useState } from 'react';

const TestComponent = ({ text }) => {
  const [count, setCount] = useState(0);
  console.log('TestComponent re-rendered');

  const handleCountChange = (e) => {
    e.preventDefault();
    let oldCount = count;
    let newCount = oldCount + 1;
    setCount(newCount);
  };

  return (
    <div>
      <TestChildComponent text={text} />
      <button onClick={handleCountChange}>{count}</button>
    </div>
  );
};

const TestChildComponent = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export { TestComponent, TestChildComponent };
