import { useCallback, useMemo, useState } from 'react';

import ButtonWithModal from './ButtonWithModal';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [parentRenderIndex, setParentRenderIndex] = useState(0);
  const [childText, setChildText] = useState('Child component');

  console.log(`Parent rendered ${parentRenderIndex}`);

  const params = useMemo(() => ({ text: childText }), [childText]);

  const handleClick = useCallback(() => {}, []);

  return (
    <div>
      <button onClick={() => setParentRenderIndex((prev) => prev + 1)}>
        Re-render app
      </button>

      <button onClick={() => setChildText((prev) => prev + '!')}>
        Change child text
      </button>

      <br />

      <ChildComponent params={params} onClick={handleClick} />

      <ButtonWithModal />
    </div>
  );
}

export default ParentComponent;
