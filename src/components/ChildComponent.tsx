import { FC } from 'react';

interface Props {
  params: { text: string };
  onClick: () => void;
}

const ChildComponent: FC<Props> = ({ params }) => {
  console.log('Child re-rendered');

  let sum = 0;

  for (let i = 1; i <= 1000000000; i++) {
    sum += i;
  }

  return (
    <div>
      {params.text} - {sum}
    </div>
  );
};

export default ChildComponent;
