"use client"
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  title: string
  body: string
  buttonText: string
  buttonFunction: () => {}
}

export default function ConfirmModal({ title, body, buttonText, buttonFunction }: Props) {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false); buttonFunction() };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <Trash2 />
      </Button >

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
