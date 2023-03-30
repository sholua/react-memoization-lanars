import { FC, ReactNode, useState } from 'react';

interface Props {
  sidebar: ReactNode;
  content: ReactNode;
}

const ParentComponent: FC<Props> = ({ sidebar, content }) => {
  const [parentRenderIndex, setParentRenderIndex] = useState(0);

  console.log(`Parent rendered ${parentRenderIndex}`);

  return (
    <div className="App">
      <aside>{sidebar}</aside>
      <main>
        <button onClick={() => setParentRenderIndex((prev) => prev + 1)}>
          Re-render app
        </button>

        {content}
      </main>
    </div>
  );
};

export default ParentComponent;
