import React from 'react';
import Home from './views/Home';

import './App.scss';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
    </div>
  );
}

export default App;
