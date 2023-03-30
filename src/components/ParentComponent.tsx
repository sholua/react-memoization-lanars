import { FC, ReactNode, useState } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const ParentComponent: FC<Props> = () => {
  const [parentRenderIndex, setParentRenderIndex] = useState(0);

  console.log(`Parent rendered ${parentRenderIndex}`);

  return (
    <div className="App">
      <aside>
        <Sidebar />
      </aside>
      <main>
        <button onClick={() => setParentRenderIndex((prev) => prev + 1)}>
          Re-render app
        </button>

        <MainContent />
      </main>
    </div>
  );
};

export default ParentComponent;
