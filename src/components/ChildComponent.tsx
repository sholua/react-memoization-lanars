import { memo } from 'react';

const ChildComponent = () => {
  console.log('Child re-rendered');
  return <div>Child component</div>;
};

export default memo(ChildComponent);
