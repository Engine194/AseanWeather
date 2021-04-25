import { useState, useEffect } from "react";
import "../scss/navBar.scss";
import {connect} from "react-redux";
import getMenuAction from "../redux/actions/navBarAction";

const NavBar = ({getMenu,propsMenu}) => {
    const [is1Clicked, setIs1Clicked] = useState(false);
    const [is2Clicked, setIs2Clicked] = useState(false);
    const [is3Clicked, setIs3Clicked] = useState(false);
    const [is4Clicked, setIs4Clicked] = useState(false);
        
    const rgba = (index1, index2)=> {
        
        return `rgba(${index1},${index1},${index1},${index2})`;
    } 

    const handleClick1 = () => {
        setIs1Clicked(true);
        document.querySelector("button.btnJS1").style.backgroundColor = rgba(160,0.5);
        setIs2Clicked(false);
        document.querySelector("button.btnJS2").style.backgroundColor = rgba(255,1);
        setIs3Clicked(false);
        document.querySelector("button.btnJS3").style.backgroundColor = rgba(255,1);
        setIs4Clicked(false);
        document.querySelector("button.btnJS4").style.backgroundColor = rgba(255,1);
    }

    const handleClick2 = () => {
        setIs1Clicked(false);
        document.querySelector("button.btnJS1").style.backgroundColor = rgba(255,1);
        setIs2Clicked(true);
        document.querySelector("button.btnJS2").style.backgroundColor = rgba(160,0.5);
        setIs3Clicked(false);
        document.querySelector("button.btnJS3").style.backgroundColor = rgba(255,1);
        setIs4Clicked(false);
        document.querySelector("button.btnJS4").style.backgroundColor = rgba(255,1);
    }

    const handleClick3= () => {
        setIs1Clicked(false);
        document.querySelector("button.btnJS1").style.backgroundColor = rgba(255,1);
        setIs2Clicked(false);
        document.querySelector("button.btnJS2").style.backgroundColor = rgba(255,1);
        setIs3Clicked(true);
        document.querySelector("button.btnJS3").style.backgroundColor = rgba(160,0.5);
        setIs4Clicked(false);
        document.querySelector("button.btnJS4").style.backgroundColor = rgba(255,1);
    }

    const handleClick4 = () => {
        setIs1Clicked(false);
        document.querySelector("button.btnJS1").style.backgroundColor = rgba(255,1);
        setIs2Clicked(false);
        document.querySelector("button.btnJS2").style.backgroundColor = rgba(255,1);
        setIs3Clicked(false);
        document.querySelector("button.btnJS3").style.backgroundColor = rgba(255,1);
        setIs4Clicked(true);
        document.querySelector("button.btnJS4").style.backgroundColor = rgba(160,0.5);
    }

    

    useEffect(() => {
        const payload = {
            menu1: is1Clicked,
            menu2: is2Clicked,
            menu3: is3Clicked,
            menu4: is4Clicked,
        }
        getMenu(payload);
        console.log("111111111111111111",propsMenu)
    });

    
    

    return (

        <div className="container-fluid" style={{ position: "absolute", top: "64px" }}>
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="row">
                        <button className="col btnScssNB1 btnJS1" onClick={handleClick1}>
                            <big>Hiện tại</big>
                        </button>
                        <button className="col btnScssNB1 btnJS2" onClick={handleClick2}>
                            <big>Theo giờ</big>
                        </button>
                        <button className="col btnScssNB1 btnJS3" onClick={handleClick3}>
                            <big>Hằng ngày</big>
                        </button>
                        <button className="col btnScssNB1 btnJS4" onClick={handleClick4}>
                            <big>Yêu thích</big>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
      propsMenu: state.naviBarReducer,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        getMenu: (payload) => dispatch(getMenuAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);