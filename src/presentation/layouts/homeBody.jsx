import React, { useState } from 'react';
import '../css/HomeBody.css';
import { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchApiE1Request, getSearchApiE2Request, getSearchApiE3Request } from '../redux/effects/searchApiEffect';
import Loading from '../components/loading';
import "../scss/homePage.scss";
import HomeCart from '../components/homeCard';



const HomeBody = ({ propsSearchApi,
    getSearchApiE1Request,
    getSearchApiE2Request,
    getSearchApiE3Request
}) => {
    useEffect(() => {
        getSearchApiE1Request("Hanoi");
        getSearchApiE2Request("Viangchan");
        getSearchApiE3Request("Bangkok")
    }, [])

    // console.log(propsSearchApi);
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

            <div className="row margin_bottom">
                <div className="col-1"></div>
                <HomeCart location={locationE1} current={currentE1}/>
                <div className="col-1"></div>
                <HomeCart location={locationE2} current={currentE2}/>
                <div className="col-1"></div>
                <HomeCart location={locationE3} current={currentE3}/>
                <div className="col-1"></div>
            </div>
        )
    } else {
        return (
            <Loading />
        );
    }

}

const mapStateToProps = (state) => {
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