import React, { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';


function Add({addHandler}) {

  //modal manipulation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //states to get the input from the user
  
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [imgUrl, setimgUrl] = useState("")
  const [rate, setrate] = useState("")


  //adding the new movie to the list

  const addMovie=()=>{
    const newMovie={id: Math.random() , title, rate, description, imgUrl}
    addHandler(newMovie);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control type="text" placeholder="The Movie Title" onChange={(e)=> settitle(e.target.value)} value={title} />
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="The Movie Description"  onChange={(e)=> setdescription(e.target.value) } value={description} />
        <Form.Label>Poster Url</Form.Label>
        <Form.Control type="text" placeholder="The Poster Url" onChange={(e)=> setimgUrl(e.target.value) } value={imgUrl} />
        <Form.Label>Movie Rate</Form.Label>
        <Form.Control type="text" placeholder="The Movie Rate" onChange={(e)=> setrate(e.target.value) } value={rate} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Add






    
   