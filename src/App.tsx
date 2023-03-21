import { useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [childText, setChildText] = useState('Child component');

  console.log(`App rendered ${appRenderIndex}`);

  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex((prev) => prev + 1)}>
        Re-render app
      </button>
      <button onClick={() => setChildText((prev) => prev + '!')}>
        Change child text
      </button>
      <br />
      <ChildComponent params={{ text: childText }} />
    </div>
  );
}

export default App;
