import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/index'
<<<<<<< HEAD

=======
>>>>>>> 8590387edb98e1b315d069265a3952f39e94c974
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

function App() {
  const isMobile = window.innerWidth < 600
  return (
<<<<<<< HEAD
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <div className="bg-gradient d-flex flex-column h-100 clearflex">
        {/* <Navbar /> */}
=======
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gradient d-flex flex-column vh-100 clearflex">
        
>>>>>>> 8590387edb98e1b315d069265a3952f39e94c974
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </DndProvider >

  );
}

export default App;