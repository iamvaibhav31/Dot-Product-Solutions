import React, { useState } from "react";
import Edit from '../assets/svg/edit.svg'
import Delete from '../assets/svg/delete.svg'
import { useDrag } from 'react-dnd'
import { useDispatch } from "react-redux";
import { deletetask } from '../features/slice/taskSlice'


function Card({ id, title, context, status }) {
     const dispatch = useDispatch()
     const [{ isDragging }, Drag] = useDrag(() => ({
          type: 'div',
          item: { id: id, status: status },
          collect: (monitor) => ({
               isDragging: !!monitor.isDragging(),
          }),
     }))
     const [show, setShow] = useState(false)

     const handleonmouseenter = () => {
          setShow(true)
     }

     const handleonmouseleave = () => {
          setShow(false)
     }

     const handleonedit = () => {
          dispatch(deletetask(id, status))
     }



     const handleshadow = show === true ? 'shadow' : null

     return (
          <div id={id} ref={Drag} className={`d-flex flex-column  p-2 m-2  border border-dark rounded ${handleshadow}`} onMouseEnter={handleonmouseenter} onMouseLeave={handleonmouseleave}>

               <div className="d-flex">
                    <p className=" w-80 m-0 text-uppercase ls-1  pt-2 pb-2 fw-bold fs-5 "> {title}</p>

                    {show === true ?
                         <div className="p-1 w-20 d-flex  justify-content-end">

                              <button className="w-50 me-1  rounded-circle bg-transparent border " onClick={handleonedit}>
                                   <img src={Delete} alt="Delete" width="100%" height="100%" />
                              </button>
                         </div>
                         : null}

               </div>
               <hr className="m-0 " />
               <p className="w-100 m-0 pt-2 pb-2">{context}</p>
          </div>
     );
}

export default Card;
