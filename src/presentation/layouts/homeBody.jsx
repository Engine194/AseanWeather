import React, { useState } from 'react';
import '../css/HomeBody.css';
import { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchApiE1Request, getSearchApiE2Request, getSearchApiE3Request } from '../redux/effects/searchApiEffect';
import Loading from '../components/loading';
import getFormatDate from '../../data/configDate';
import "../scss/homePage.scss";


const HomeBody = ({ propsSearchApi,
    getSearchApiE1Request,
    getSearchApiE2Request,
    getSearchApiE3Request
}) =>
{
    useEffect(() =>
    {
        getSearchApiE1Request("Hanoi");
        getSearchApiE2Request("Viangchan");
        getSearchApiE3Request("Bangkok")
    }, [])

    console.log(propsSearchApi);
    const success = propsSearchApi.success;

    if (success.E1 == 1 && success.E2 == 1 && success.E3 == 1) {
        const E1 = propsSearchApi.data.E1;
        const locationE1 = E1.location;
        const currentE1 = E1.current;

        const E2 = propsSearchApi.data.E2;
        const locationE2 = E2.location;
        const currentE2 = E2.current;

        const E3 = propsSearchApi.data.E3;
        const locationE3 = E3.location;
        const currentE3 = E3.current;

        return (

            <div className="row HomeBody">
                {/* <button>
                    <i class="fa fa-envelope-square" style={{ color: "rgba(234, 67, 53,1)", fontSize: "36px", position: "relative", top: "103px" }} aria-hidden="true" />
                </button>
                <button> <i class="fa fa-facebook-square" style={{ color: "rgba(66,103,178,1)", fontSize: "36px", position: "relative", top: "103px" }} aria-hidden="true" />
                </button> */}
                <div className="col-2">

                </div>
                <div className="col mt-4 homeCurrent" name="hanoi">
                    <h4>{locationE1.name}, {locationE1.country}</h4>
                    <h5>Cập nhật lần cuối: {getFormatDate(currentE1.last_updated).time} {getFormatDate(currentE1.last_updated).date}</h5>
                    <h3>{currentE1.temp_c}<span>&#176;</span></h3>
                    <div className="row center">
                        <p>{currentE1.condition.text}</p><br />
                        <p>Mây che phủ {currentE1.cloud} %</p>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col mt-4 homeCurrent" name="viang chan"  >
                    <h4>{locationE2.name}, {locationE2.country}</h4>
                    <h5>Cập nhật lần cuối: {getFormatDate(currentE2.last_updated).time} {getFormatDate(currentE2.last_updated).date}</h5>
                    <h3>{currentE2.temp_c}<span>&#176;</span></h3>
                    <div className="row center">
                        <p >{currentE2.condition.text}</p><br />
                        <p>Mây che phủ {currentE2.cloud} %</p>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col mt-4 homeCurrent" name="bangkok">
                    <h4>{locationE3.name}, {locationE3.country}</h4>
                    <h5>Cập nhật lần cuối: {getFormatDate(currentE3.last_updated).time} {getFormatDate(currentE3.last_updated).date}</h5>
                    <h3>{currentE3.temp_c}<span>&#176;</span></h3>
                    <div className="row center">
                        <p>{currentE3.condition.text}</p><br />
                        <p>Mây che phủ {currentE3.cloud} %</p>
                    </div>
                </div>
                <div className="col-2">

                </div>
            </div>
        )
    } else {
        return (
            <Loading />
        );
    }

}

const mapStateToProps = (state) =>
{
    return {
        propsSearchApi: state.searchApiReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchApiE1Request,
    getSearchApiE2Request,
    getSearchApiE3Request,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);