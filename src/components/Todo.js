import React from "react";
import './components.css'
import { useSelector, useDispatch } from "react-redux";
import { todotasks, changetaskstatus } from '../features/slice/taskSlice'
import { useDrop } from 'react-dnd'

import Card from "./Card";
function Todo() {
     const dispatch = useDispatch()
     const todotask = useSelector(todotasks)
     console.log(todotask)

     const [{ isOver }, Drop] = useDrop(() => ({
          accept: 'div',
          drop: (item) => {
               dispatch(changetaskstatus(item.id, "to-do", item.status))
          },
          collect: (monitor) => ({
               isOver: !!monitor.isOver(),
          }),
     }))
     return (
          <div className="bg-light bg-gradient clearfix  rounded d-flex flex-column shadow" ref={Drop}>
               <div className=" ">
                    <p className="m-0 text-center fs-3 text-capitalize fw-bold p-1">to-do</p>
                    <hr className="m-0 " />
               </div>

               <div className=" p-1">
                    {todotask.map((item) => {
                         return (
                              <Card id={item.id} title={item.tasktitle} context={item.taskcontext} status={item.status} />
                         )
                    })}
               </div>
          </div>
     );
}

export default Todo;
