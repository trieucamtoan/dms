import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Container, Row} from 'react-bootstrap';
import MessageController from '../../responses/MessageController';
import RequestServer from '../../requests/RequestServer';
import SimpleModal from '../modal/SimpleModal';

function SignUpForm() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  //Modal properties
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [bodyModal, setBodyModal] = useState("");
  const [closeButtonTitleModal, setCloseButtonTitleModal] = useState("");
  const [error, setError] = useState(false);

  const isFieldNotEmpty = () => {
    return ((userName !== '')  && (email !== "") && (password !== "") && (passwordConfirmation !== ""))
  }
  
  const isPasswordMatch = () => {
    return (password === passwordConfirmation)
  }

  const registerButtonHandler = async() => {
    let fieldNotEmpty = isFieldNotEmpty();
    let passwordMatch = isPasswordMatch(); 
  
    if (fieldNotEmpty && passwordMatch){
      
      const user = {
        userName: userName,
        password: password,
        email: email
      }
      const response = await RequestServer.register(user);
      const message = MessageController.accept(response);
      console.log("Message: " , message)

      if (message === true){
        //Setup the modal
        setShowModal(true);
        setTitleModal("Alert");
        setBodyModal("Registered Successfully");
        setCloseButtonTitleModal("Close");
        setError(false);
      }
      else {
        setShowModal(true);
        setTitleModal("Alert");
        setBodyModal("Registered Failed. Please try again");
        setCloseButtonTitleModal("Close");
        setError(true);
      }
    }

    else{
      if (!fieldNotEmpty){
        console.log("Field is empty")
      }
      if (!passwordMatch){
        console.log("Password don't match")
      }
    }
  } 

  const createNavigateButton = () => {
    if (error === false){
      return (
        <Link to = "/login">
          <Button>
            <span>Login</span>
          </Button>
        </Link>
      )
    }
    return null;
  }

    return (
      
      <Container>
        <Row className="justify-content-md-center">
          <h2>Register with us</h2>
        </Row>

        <Row className="justify-content-md-center">
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>User Name</Form.Label>
              <Form.Control 
                type="username" 
                placeholder="Your username"
                onChange = {(event) => {setUserName(event.currentTarget.value)}}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Your email"
                onChange = {(event) => {setEmail(event.currentTarget.value)}} 
                />
            </Form.Group>
      
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange = {(event) => {setPassword(event.currentTarget.value)}}
                />
              <Form.Text id="passwordHelpBlock" muted>
                Must be 8-20 characters long.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
                type="password" 
                  placeholder="Password"
                  onChange = {(event) => {setPasswordConfirmation(event.currentTarget.value)}} 
                  />
              <Form.Text id="passwordHelpBlock" muted>
                Must match the above password.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicSavedLogin">
              <Form.Check type="checkbox" label="Stay logged in" />
            </Form.Group>
            <Button 
              variant="primary" 
              // type="submit"
              onClick = {(event) => {registerButtonHandler(event)}}
              >
              Register
            </Button>
          </Form>
        </Row>
        <SimpleModal
          show = {showModal}
          title = {titleModal}
          body = {bodyModal}
          handleClose = {() => setShowModal(false)}
          closeButtonTitle = {closeButtonTitleModal}
          navigateButton = {createNavigateButton()}
        />
      </Container>
    )
}

function Register() {
    return (
      <SignUpForm/>
    )
}

export default Register;
