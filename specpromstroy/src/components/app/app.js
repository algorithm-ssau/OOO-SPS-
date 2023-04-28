import React, { useState } from 'react';
import AppFirstProject from '../project-first/project-first';
import AppMain from '../app-main/app-main';
import AppSecondProject from '../project-second/project-second';

import './app.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('AppMain');

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  }

  return (
    <div>
      {activeComponent === 'AppMain' && <AppMain onComponentChange={handleComponentChange} />}
      {activeComponent === 'ProjectFirst' && <AppFirstProject onComponentChange={handleComponentChange} />}
      {activeComponent === 'ProjectSecond' && <AppSecondProject onComponentChange={handleComponentChange} />}
    </div>
  );
}

export default App;