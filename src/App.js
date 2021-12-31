import React from 'react';
import Modal from 'lib/components/Modal/Modal';
import useModal from 'lib/utils/useModal';
import 'App.css';

function App() {
  const {isShowing : show1, toggle : toggle1} = useModal();

  return (
    <>
      <main className='salut'>
        <button type='submit' className='buttonDefault' onClick={toggle1}>Modal (with header)</button>
        <Modal isShowing={show1} hide={toggle1}>
          <h1>Hello, I am a Title </h1>
          <p>test test test</p>
        </Modal>
      </main>
    </>
  );
}

export default App;
