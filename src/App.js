import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/index'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

function App() {
  const isMobile = window.innerWidth < 600
  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <div className="bg-gradient d-flex flex-column h-100 clearflex">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </DndProvider >

  );
}

export default App;