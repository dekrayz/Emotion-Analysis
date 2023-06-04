import React from 'react';
import { loadModels } from './helpers/faceApi';
import { createFaLibrary } from './helpers/icons';
import Camera from './components/Camera/Camera';
import './App.css';

const mode = false;

createFaLibrary();
loadModels();
function App() {

  return (
    <div className="App">
      <header>
        <div className="App__header">
          <h1>
            <span>Deteksi Emosi</span>
          </h1>
        </div>
      </header>
      <Camera photoMode={mode} />
      <p>
        Made with{' '}
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>{' '}
        by Dika.
      </p>
    </div>
  );
}

export default App;
