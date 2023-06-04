import React, { useState } from 'react';

import { loadModels } from './helpers/faceApi';
import { createFaLibrary } from './helpers/icons';

import Camera from './components/Camera/Camera';

import './App.css';
createFaLibrary();
loadModels();
function App() {
  const [mode, setMode] = useState(false); //true = photo mode; false = video mode

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
