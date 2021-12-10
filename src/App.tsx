import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Ping } from './graphql-examples/Ping';

function App() {
  return (
    <div>
      <header></header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Ping />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
