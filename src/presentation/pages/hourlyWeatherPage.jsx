import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getHourlyRequest } from "../redux/effects/hourlyEffect";
import Loading from "../components/loading";
import HourlyBody from "../components/hourlyBody";

const HourlyWeatherPage = ({ getHourlyRequest, propsHourly, propsSearch }) =>
{
    const history = useHistory();
    useEffect(() =>
    {
        console.log('propsSearch.success', propsSearch.success);
        if (propsSearch.success == 1) {

            console.log("propsSearch",propsSearch.data);
            if (propsSearch.data.search) {
                console.log(propsSearch.data.search.name);
                // Gọi Api ở đây
                const q = propsSearch.data.search.name;
                getHourlyRequest(q);
            }
            
        } else {
            console.log('localStorage');
            const cityName = localStorage.getItem("cityName");
            console.log("11111", cityName);
            if (cityName) {
                getHourlyRequest(cityName);
            } else {
                history.push({
                    pathname: "/",
                })
            }
        }

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
const mapStateToProps = (state) =>
{
    return {
        propsHourly: state.hourlyReducer,
        propsSearch: state.searchReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getHourlyRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HourlyWeatherPage);