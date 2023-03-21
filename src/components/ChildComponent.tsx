import { FC, memo } from 'react';

interface Props {
  text: string;
}

const ChildComponent: FC<Props> = ({ text }) => {
  console.log('Child re-rendered');
  return <div>{text}</div>;
};

export default memo(ChildComponent);
