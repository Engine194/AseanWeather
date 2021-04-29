import React, { useState } from 'react';
import './HomeBody.css';
import { getCurrentRequest } from "../redux/effects/currentEffect";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router';



const HomeBody = ({ propsCurrent } ) =>
{
    const history = useHistory();
    useEffect(() =>
    {
        getCurrentRequest("hanoi");
    }, [])
    const location = propsCurrent;
    const current = propsCurrent;
    console.log(location);
    const goDetailHaNoi = (e) =>
    {
        const value = e.target.name
        history.push({
            pathname: "/main/current",
            state: {
                response: value // đính kèm theo state 
            }
        })
    }
   

    return (

        <div className="HomeBody">
            {/* <button>
                <i class="fa fa-envelope-square" style={{ color: "rgba(234, 67, 53,1)", fontSize: "36px", position: "relative", top: "103px" }} aria-hidden="true" />
            </button>
            <button> <i class="fa fa-facebook-square" style={{ color: "rgba(66,103,178,1)", fontSize: "36px", position: "relative", top: "103px" }} aria-hidden="true" />
            </button> */}

            <div className="Homebody_font" name="hanoi" onClick={(goDetailHaNoi)}>
                
                <h3>HANOI, VIETNAM</h3>
                <h5>APR 25, 2021 11:59 PM</h5>
                <h2>29°</h2>
                <p>TRỜI NHIỀU MÂY</p>
                <p>KHẢ NĂNG CÓ MƯA 50%</p>

            </div>
            <div className="Homebody_font" name="viang chan"  >
                <h3>VIANG CHAN, LAOS</h3>
                <h5>APR 25, 2021 11:59 PM</h5>
                <h2>31°</h2>
                <p>TRỜI NHIỀU ÍT MÂY</p>
                <p>KHẢ NĂNG CÓ MƯA 10%</p>
            </div>
            <div className="Homebody_font" name="bangkok">
                <h3>BANGKOK, THAILAND</h3>
                <h5>APR 25, 2021 11:59 PM</h5>
                <h2>32°</h2>
                <p>TRỜI NHIỀU ÍT MÂY</p>
                <p>KHẢ NĂNG CÓ MƯA 5%</p>
            </div>
        </div>
    )
}

export default HomeBody;