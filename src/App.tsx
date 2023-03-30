import './App.css';

import ParentComponent from './components/ParentComponent';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <ParentComponent sidebar={<Sidebar />} content={<MainContent />} />
    </div>
  );
}

export default App;
