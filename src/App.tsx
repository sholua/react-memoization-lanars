import { useCallback, useMemo, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import ChildComponent from './components/ChildComponent';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [childText, setChildText] = useState('Child component');
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log(`App rendered ${appRenderIndex}`);

  const params = useMemo(() => ({ text: childText }), [childText]);

  const handleClick = useCallback(() => {}, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex((prev) => prev + 1)}>
        Re-render app
      </button>

      <button onClick={() => setChildText((prev) => prev + '!')}>
        Change child text
      </button>

      <br />

      <ChildComponent params={params} onClick={handleClick} />

      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

export default App;
