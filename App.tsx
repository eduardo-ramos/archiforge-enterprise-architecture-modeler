import React from 'react';
import { ReactFlowProvider } from 'reactflow';

import ArchiCanvas from './components/ArchiCanvas';
import Palette from './components/Palette';

const App: React.FC = () => {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-screen font-sans">
        <header className="bg-gray-800 text-white p-4 shadow-md z-10 flex items-center">
          <h1 className="text-xl font-bold">ArchiForge Modeler</h1>
          <span className="ml-2 text-sm text-gray-400">(ArchiMate 3.2 + TOGAF 9.2)</span>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <Palette />
          <main className="flex-1 h-full">
            <ArchiCanvas />
          </main>
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default App;