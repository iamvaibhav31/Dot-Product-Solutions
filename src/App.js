import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/index'
import Navbar from './components/Navbar';
import Fotter from './components/fotter';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gradient d-flex flex-column vh-100 clearflex">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='Dot-Product-Solutions/' element={<Home />} />
        </Routes>
      </div>
    </DndProvider >

  );
}

export default App;
