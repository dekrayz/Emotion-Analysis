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
          <h3>
            <span>Deteksi Emosi</span>
          </h3>
        </div>
      </header>
      <Camera photoMode={mode} />
      <p>
        Made with{' '}
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>{' '}
        by Andika Fadilla.
      </p>
    </div>
  );
}

export default App;
