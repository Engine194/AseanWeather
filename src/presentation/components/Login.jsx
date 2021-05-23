import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import '../css/HomeHeader.css';
import { postDataUser } from '../../data/api/apiRequest';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserRequest } from "../redux/effects/getUserEffect";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from 'react-router';
import LoginAdmin from './LoginAdmin';
import { successNotify } from '../../data/configNotify';
// import linkHome from '../../data/api/linkHome';

// Gọi API từ Firebase
const config = {
  apiKey: 'AIzaSyCFvyqD96SjvtTIQv2wIOdCg11l3dKCDGE',
  authDomain: 'login-aa48b.firebaseapp.com',
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  // signInSuccessUrl: linkHome,
  // Hiển thị Facebook là nhà cung cấp xác thực.
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
};

const Login = ({ className, propsUser, getUserRequest }) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  const [isClickLogin, setIsClickLogin] = useState(false);

  const [displayName, setDisplayName] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const [isHome, setIsHome] = useState(false);

  const [userGlobal, setUserGlobal] = useState({});

  const history = useHistory();

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname == "/") {
      setIsHome(true)
    }
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      setIsSignedIn(!!user);
      if (!!user) {
        let token = user.getIdToken();
        setUserGlobal({
          displayName: user.displayName,
          email: user.email,
          token,
        });
        let name = user.displayName;
        const nameSplited = name.split(" ");
        const n = nameSplited.length;
        if (n > 0) {
          setDisplayName(nameSplited[n - 1]);
        }
        
        localStorage.setItem("facebookId", token);
        await getUserRequest(token);
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  useEffect(() => {
    if (propsUser.success == 1) {
      if (!propsUser.data.user && !!userGlobal) {
        const data = {
          name: userGlobal.displayName,
          email: userGlobal.email,
          facebookId: userGlobal.token,
        }
        postDataUser(data);
        successNotify(`Chào mừng ${userGlobal.displayName} đến với Asean Weather!`)
      }
    }
  }, [propsUser.success]);

  const handleLogOut = () => {
    let DBDeleteRequest = window.indexedDB.deleteDatabase("firebaseLocalStorageDb");

    DBDeleteRequest.onerror = function (event) {
      console.log("Error deleting database.");
    };

    DBDeleteRequest.onsuccess = function (event) {
      console.log("Database deleted successfully");

      console.log(event.result); // should be undefined
    };
    localStorage.removeItem('user');
    localStorage.removeItem("facebookId");
    document.querySelector("a.linkHomeHS").click();
  }

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handlePushFavo = () => {
    if (isHome && !!userGlobal) {
      
      getUserRequest(userGlobal.token);
      history.push({
        pathname: "/main/favorite_cities",
      })
    } else if (isHome == false) {
      document.querySelector("button.btnJS4").click();
    }
  }


  if (isSignedIn && !isClickLogin) {
    return (
      <>
        <div className="dropdown"
          // onBlur={handleDropdown}
          style={{ fontSize: (isHome ? "18px" : '15px'), }}>
          <button type="button" onClick={handleDropdown}
            className="headerLogin"
            style={{ height: (isHome ? "42px" : '40px'), width: (isHome ? "150px" : '120px') }} >
            <big>Hi, {displayName ? displayName : "User"}! </big>
            <span style={{ fontSize: (isHome ? "20px" : '18px'), float: "right", position: "relative", bottom: "4px", right: (isHome ? "5px" : '3px') }}>
              <i className="fa fa-sort-desc" aria-hidden="true"></i>
            </span>
          </button>

          {(isOpen ? (
            <div id="myDropdown" className="dropdown-content" style={{ width: (isHome ? "150px" : '120px') }} >
              <a onClick={handlePushFavo} >Yêu thích</a>
              <a onClick={handleLogOut}>Log out</a>
            </div>
          ) : null)}

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
              <div className="text-center">Click vào <b><u>Sign in with Facebook</u></b> nếu bạn đồng ý cho <b><u>AseanWeather</u></b> có quyền truy cập vào Facebook của bạn</div>
            </FormGroup>
            <FormGroup>
              <StyledFirebaseAuth onClick={() => setIsClickLogin(true)} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </FormGroup>
            <FormGroup className="text-center">
              <div>If You Are Admin, <a onClick={toggle1} style={{ color: "Highlight" }} className="click-Here" ><i><u>Click Here </u></i></a> To Login</div>
              <Modal isOpen={modal1} toggle={toggle1} className={className}>
                <ModalHeader toggle={toggle1}>SIGN IN ADMIN</ModalHeader>
                <LoginAdmin />
              </Modal>
            </FormGroup>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    propsUser: state.userReducer,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUserRequest,
},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Login);