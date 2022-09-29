import React from "react";
import Card from "./Card";
import { useDrop } from 'react-dnd'
import { useSelector, useDispatch } from "react-redux";
import { doingtasks, changetaskstatus } from '../features/slice/taskSlice'
function Doing() {
     const dispatch = useDispatch()
     const doingtask = useSelector(doingtasks)
     const [{ isOver }, Drop] = useDrop(() => ({
          accept: 'div',
          drop: (item) => {
               dispatch(changetaskstatus(item.id, "doing", item.status))
          },
          collect: (monitor) => ({
               isOver: !!monitor.isOver(),
          }),
     }))
     return (
          <div className="bg-light bg-gradient clearfix rounded d-flex flex-column shadow" ref={Drop}>
               <div className=" ">
                    <p className="m-0 text-center fs-3 text-capitalize fw-bold p-1">in-progress</p>
                    <hr className="m-0 " />
               </div>
               <div className=" p-1">
                    {doingtask.map((item) => {
                         return (
                              <Card id={item.id} title={item.tasktitle} context={item.taskcontext} status={item.status} type="SpecificTasks" />
                         )
                    })}

               </div>

          </div>
     );
}

export default Doing;
