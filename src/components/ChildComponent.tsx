import { useState } from 'react';

const ChildComponent = () => {
  const [text, setText] = useState('Child component');
  console.log('Child re-rendered');

  let sum = 0;

  for (let i = 1; i <= 1000000000; i++) {
    sum += i;
  }

  return (
    <div>
      <button onClick={() => setText((prev) => prev + '!')}>
        Change child text
      </button>
      <br />
      {text} - {sum}
    </div>
  );
};

export default ChildComponent;
