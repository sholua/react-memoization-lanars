import './App.css';
import ButtonWithModal from './components/ButtonWithModal';
import ChildComponent from './components/ChildComponent';

import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div>
      <ParentComponent>
        <ChildComponent />
        <ButtonWithModal />
      </ParentComponent>
    </div>
  );
}

export default App;
