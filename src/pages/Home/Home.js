import React from "react";
import Todo from "../../components/Todo";
import Doing from "../../components/Doing"
import Done from "../../components/Done"
import Addtasks from "../../components/Addtasks"
import Alltasks from "../../components/Alltasks"
function Home() {
     return (
          <div className="container">
               <Addtasks />
               <Alltasks />
               <div className="  mt-5 mb-5">
                    <h1 className="text-white text-uppercase pb-1 ls-1"> Manage Tasks </h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                         <div className="col">
                              <Todo />
                         </div>
                         <div className="col">
                              <Doing />
                         </div>
                         <div className="col">
                              <Done />
                         </div>
                    </div>
               </div>
          </div>

     );
}

export default Home;
