import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getHourlyRequest } from "../redux/effects/hourlyEffect";
import Loading from "../components/loading";
import { getHourlyList, getHourNow } from '../../data/configHour';
import HourlyBody from "../components/hourlyBody";

const HourlyWeatherPage = ({ getHourlyRequest, propsHourly }) => {
    useEffect(() => {
        getHourlyRequest("ha noi");
        getHourNow();
    //     if (propsHourly.success == 1) {
    //         setHourlyList(getHourlyList(propsHourly.data.hourly.forecast.forecastday[0].hour));
    //         console.log("22222222", hourlyList);
    //    } else {
    //         console.log("1111111111");
    //    }
    }, [])
    if (propsHourly.success === 0) {
        return (
            <Loading />
        );
    } else {
        const location = propsHourly.data.hourly.location;
        const forecast = propsHourly.data.hourly.forecast;
        const current = propsHourly.data.hourly.current;
        const hourlyList = propsHourly.data.hourlyList;


        return (

            <>
             <HourlyBody location={location} hourlyList={hourlyList} /> 
            </>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        propsHourly: state.hourlyReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getHourlyRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HourlyWeatherPage);