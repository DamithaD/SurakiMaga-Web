import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Review(props) {

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>

      <Modal {...props} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Complaints</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label >Complaint Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select the type of Complaint</option>
                <option value="1">Misbehaviour of Driver</option>
                <option value="2">Late arrival to the school</option>
                <option value="3">Discomfort in the Vehicle</option>
                <option value="4">Other</option>
            </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Detail of the complaint</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-row gap-5 justify-content-center'>
        <Button className="w-25" onClick={props.onHide}>Submit</Button>
        <Button className="w-25 bg-secondary border-secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
      </Modal>
    </>
  );
}
