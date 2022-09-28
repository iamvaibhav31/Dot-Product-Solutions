import React, { useState } from "react";
import './components.css'
import Model from './Model'
function Addtasks() {
     const [show, setshow] = useState(false)
     const handleaddtask = () => {
          setshow(true)
     };

     console.log(show)
     return (
          <div className="d-flex  align-items-center justify-content-center mt-4 mb-5 border border-white">
               <div className="bg-graytransparent shadow text-center rounded p-5 w-100 ms m-3">
                    <p className='h1 pmb-1 text-white text-capitalize'> Welcome to task scheduler</p>

                    <button className="mt-1 btn btn-outline-light" onClick={handleaddtask}>
                         Add Tasks
                    </button>
               </div>
               {show && <Model show={show} setshow={setshow} />}
          </div>
     );
}

export default Addtasks;
