import './components.css'
import React from "react";
import { Link } from 'react-router-dom'
function Navbar() {
     return (
          <nav class="navbar navbar-expand-lg navbar-light bg-graytransparent shadow">
               <div class="container">
                    <Link class="navbar-brand text-white" href="#">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                   <Link class="nav-link text-white" aria-current="page" href="#">Home</Link>
                              </li>
                              <li class="nav-item">
                                   <Link class="nav-link text-white" href="#">Link</Link>
                              </li>

                         </ul>
                    </div>
               </div>
          </nav>);
}

export default Navbar;
