import { useState } from 'react';

import ButtonWithModal from './ButtonWithModal';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [parentRenderIndex, setParentRenderIndex] = useState(0);

  console.log(`Parent rendered ${parentRenderIndex}`);

  return (
    <div>
      <button onClick={() => setParentRenderIndex((prev) => prev + 1)}>
        Re-render app
      </button>

      <ChildComponent />

      <ButtonWithModal />
    </div>
  );
}

export default ParentComponent;
