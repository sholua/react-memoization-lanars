import { FC, memo } from 'react';

interface Props {
  params: { text: string };
  onClick: () => void;
}

const ChildComponent: FC<Props> = ({ params }) => {
  console.log('Child re-rendered');
  return <div>{params.text}</div>;
};

export default memo(ChildComponent);
