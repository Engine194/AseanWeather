import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getHourlyRequest } from "../redux/effects/hourlyEffect";
import Loading from "../components/loading";
import HourlyBody from "../components/hourlyBody";

const HourlyWeatherPage = ({ getHourlyRequest, propsHourly }) => {
    
    useEffect(() => {
        getHourlyRequest("ha noi");
    }, [])
    
    // Kiểm tra data
    //console.log(propsHourly);

    // Kiểm tra xem data đã có chưa, nếu có thì ...
    if (propsHourly.success == 0) {
        return (
            <Loading />
        );
    } else {
        const location = propsHourly.data.hourly.location;
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