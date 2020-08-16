import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SimpleModal = (props) => {
    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              {props.closeButtonTitle}
            </Button>
            {props.navigateButton}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default SimpleModal;
