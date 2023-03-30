import { FC, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ParentComponent: FC<Props> = ({ children }) => {
  const [parentRenderIndex, setParentRenderIndex] = useState(0);

  console.log(`Parent rendered ${parentRenderIndex}`);

  return (
    <div className="App">
      <button onClick={() => setParentRenderIndex((prev) => prev + 1)}>
        Re-render app
      </button>

      {children}
    </div>
  );
};

export default ParentComponent;
