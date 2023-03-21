import { useMemo, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [childText, setChildText] = useState('Child component');

  console.log(`App rendered ${appRenderIndex}`);

  const params = useMemo(() => ({ text: childText }), [childText]);

  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex((prev) => prev + 1)}>
        Re-render app
      </button>
      <button onClick={() => setChildText((prev) => prev + '!')}>
        Change child text
      </button>
      <br />
      <ChildComponent params={params} onClick={() => {}} />
    </div>
  );
}

export default App;
