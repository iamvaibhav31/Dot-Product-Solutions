import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import validator from '../validator/Addtasksvalidator'
import { useDispatch } from "react-redux";
import { addtasks } from '../features/slice/taskSlice'

const Model = ({ show, setshow }) => {
     const dispatch = useDispatch()
     const [tasktitle, setTasktitle] = useState("")
     const [taskcontext, setTaskcontext] = useState("")
     const [status, setStatus] = useState("to-do")
     const [formError, setFormError] = useState({})

     const handleClose = () => {
          setshow(false)
     }
     const handleAddtasks = (e) => {
          e.preventDefault()
          setFormError(validator({ tasktitle, taskcontext }))
          console.log("error")
          console.log(formError)
          if (Object.keys(formError).length === 0) {
               dispatch(addtasks(tasktitle, taskcontext, status))
               setshow(false)
          }

     }

     return (
          // <ReactModal isOpen={show} onRequestClose={() => closeModel(false)} onClick={() => }
          <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                    <Modal.Title>Add Tasks</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                    <Form>
                         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Task Title</Form.Label>
                              <Form.Control
                                   type="text"
                                   autoFocus
                                   name="tasktitle"
                                   onChange={(e) => setTasktitle(e.target.value)}
                              />
                         </Form.Group>
                         <Form.Group className="mb-3">
                              <Form.Label>Status</Form.Label>
                              <Form.Select aria-label="Default select example" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                   <option>Status </option>
                                   <option value="to-do">To-do</option>
                                   <option value="doing">In-progress</option>
                                   <option value="done">Completed</option>
                              </Form.Select>
                         </Form.Group>

                         <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                         >
                              <Form.Label>Task Context</Form.Label>
                              <Form.Control as="textarea" rows={3} name="taskContext" onChange={(e) => setTaskcontext(e.target.value)} />
                         </Form.Group>

                    </Form>
               </Modal.Body>
               <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                         Close
                    </Button>
                    <Button variant="primary" onClick={handleAddtasks}>
                         Add Tasks
                    </Button>
               </Modal.Footer>
          </Modal>
     );
}

export default Model;
