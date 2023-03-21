import { useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);

  console.log(`App rendered ${appRenderIndex}`);

  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex((prev) => prev + 1)}>
        Re-render app
      </button>
      <ChildComponent />
    </div>
  );
}

export default App;
