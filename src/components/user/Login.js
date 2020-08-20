import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Form, Button, Container, Row} from 'react-bootstrap';
import MessageController from '../../responses/MessageController';
import RequestServer from '../../requests/RequestServer';
import SimpleModal from '../modal/SimpleModal';

function LoginForm(props) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  //Modal properties
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [bodyModal, setBodyModal] = useState("");
  const [closeButtonTitleModal, setCloseButtonTitleModal] = useState("");
  const [error, setError] = useState(false);

  const isFieldNotEmpty = () => {
    return ((userName !== '')  &&  (password !== ""))
  }

  const loginButtonHandler = async() => {
    let fieldNotEmpty = isFieldNotEmpty();
  
    if (fieldNotEmpty){
      
      const user = {
        userName: userName,
        password: password
      }
      const response = await RequestServer.login(user);
      const message = MessageController.accept(response);
      console.log("Message: " , message)

      if (message === true){
        //Setup the modal
        setShowModal(true);
        setTitleModal("Alert");
        setBodyModal("Login Successfully");
        setCloseButtonTitleModal("Close");
        setError(false);
        
        //Slice the array response and store jwt token & role privilleges in localStorage
        //Set JWT Token to local storage
        var jwtToken = response.data.slice(0,1);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("isLoggedIn", "true");
        //Store array of privilleges in localStorage
        var privilleges = response.data.slice(1);
        localStorage.setItem("privilleges", privilleges);

        console.log(props.history)
        props.history.push("/dashboard")
        window.location.reload()
      }
      else {
        setShowModal(true);
        setTitleModal("Alert");
        setBodyModal("Login Failed. Please try again");
        setCloseButtonTitleModal("Close");
        setError(true);
      }
    }

    else{
        console.log("Field is empty")
    }
  } 

  const createNavigateButton = () => {
    if (error === false){
      return (
        <Link to = "/dashboard">
          <Button>
            <span>Dashboard</span>
          </Button>
        </Link>
      )
    }
    return null;
  }

    return (
      
      <Container>
        <Row className="justify-content-md-center">
          <h2>Login</h2>
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
      
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange = {(event) => {setPassword(event.currentTarget.value)}}
                />
            </Form.Group>

            {/* <Form.Group controlId="formBasicSavedLogin">
              <Form.Check type="checkbox" label="Stay logged in" />
            </Form.Group> */}
            <Button 
              variant="primary" 
            //   type="submit"
              onClick = {(event) => {loginButtonHandler(event)}}
              >
              Login
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

function Login(props) {
    return (
      <LoginForm history = {props.history}/>
    )
}

export default Login;
