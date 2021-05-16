import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import '../css/HomeHeader.css';
import linkHome from '../../data/api/linkHome';

// Gọi API từ Firebase
const config = {
  apiKey: 'AIzaSyCFvyqD96SjvtTIQv2wIOdCg11l3dKCDGE',
  authDomain: 'login-aa48b.firebaseapp.com',
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: linkHome,
  // Hiển thị Facebook là nhà cung cấp xác thực.
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
};

const Login = ({ className }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  const [isClickLogin, setIsClickLogin] = useState(false);

  const [displayName, setDisplayName] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname == "/") {
      setIsHome(true)
    }
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      setIsSignedIn(!!user);
      if (!!user) {
        console.log("user", user);
        setDisplayName(user.displayName.split(" ")[0]);
        console.log("user.email", user.email);
        console.log("user.photoURL", user.photoURL);
      }

    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  }
  
  if (isSignedIn && !isClickLogin) {
  return (
    <>
      <div className="dropdown" style={{fontSize: (isHome? "20px": '15px'),}}>
        <button type="button" onClick={handleDropdown} className="headerLogin" style={{height: (isHome? "46px": '40px'), width: (isHome? "160px": '120px')}} ><big>Hi, Nguyễn{displayName}!</big></button>
        <div id="myDropdown" className="dropdown-content" style={{width: (isHome? "160px": '120px')}} >
          {isOpen ? (<a href="#about">Yêu thích</a>) : null}
          {isOpen ? (<a href="#about">Log out</a>) : null}
        </div>
      </div>

    </>
  );
  } else if (!isSignedIn && !isClickLogin) {
    return (
      <>
        <button className="headerSearch" type="button" onClick={toggle}>LOGIN</button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>LOGIN</ModalHeader>
          <ModalBody>
            <FormGroup>
              <div className="text-center">Click vào <b><u>Sign in with Facebook</u></b> nếu bạn đồng ý cho <b><u>AseanWeather</u></b> sẽ có quyền truy cập vào Facebook của bạn</div>
            </FormGroup>
            <FormGroup>
              <StyledFirebaseAuth onClick={() => setIsClickLogin(true)} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </FormGroup>
            <FormGroup className="text-center">
              <div>If You Are Admin, <a onClick={toggle1} style={{ color: "Highlight" }}><i><u>Click Here </u></i></a> To Login</div>
              <Modal isOpen={modal1} toggle={toggle1} className={className}>
                <ModalHeader toggle={toggle1}>SIGN IN ADMIN</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                  </Form>
                  <Button style={{ marginTop: 20 }} color="primary" onClick={toggle}>Summit</Button>
                </ModalBody>
              </Modal>
            </FormGroup>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Login;