import React from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { donetasks, changetaskstatus } from '../features/slice/taskSlice'
import { useDrop } from 'react-dnd'


function Done() {
     const dispatch = useDispatch()
     const donetask = useSelector(donetasks)
     console.log(donetask)
     const [{ isOver }, Drop] = useDrop(() => ({
          accept: 'div',
          drop: (item) => {
               console.log(item)
               dispatch(changetaskstatus(item.id, "done", item.status))
          },
          collect: (monitor) => ({
               isOver: !!monitor.isOver(),
          }),
     }))
     return (
          <div className="bg-light bg-gradient clearfix  rounded d-flex flex-column shadow" ref={Drop}>
               <div className=" ">
                    <p className="m-0 text-center fs-3 text-capitalize fw-bold p-1">completed</p>
                    <hr className="m-0 " />
               </div>
               <div className=" p-1">
                    {donetask.map((item) => {
                         return (
                              <Card id={item.id} title={item.tasktitle} context={item.taskcontext} status={item.status} type="SpecificTasks" />
                         )
                    })}

               </div>

          </div>
     );
}

export default Done;
