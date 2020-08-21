import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RequestServer from '../../requests/RequestServer';
import MessageController from '../../responses/MessageController';

const AddUserModal = () => {
    const[showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("Add New User");
    const [bodyTitle, setBodyTitle] = useState("Adding New User...")
    return (
        <div>
          <Button 
          variant = "link"
          onClick={() => setShowModal(true)}
          >
            Add New User
          </Button>
    
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {bodyTitle}
            </Modal.Body>
            <Modal.Footer>
              <Button 
              variant="secondary" 
              onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button 
              variant="outline-danger"
            //   onClick={(event) => this.addHandler(event)}
              >
              Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )

}

export default AddUserModal;