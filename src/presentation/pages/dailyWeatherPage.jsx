import '../scss/currentPage.scss';
import '../scss/hourlyPage.scss';
import { useEffect, useState } from 'react';
import { getDailyRequest } from '../redux/effects/dailyEffect';
import { useHistory } from 'react-router';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Loading from "../components/loading";
import getFormatDate from "../../data/configDate";
import DailyBody from '../components/dailyBody';



const DailyWeatherPage = ({ getDailyRequest, propsSearch, propsDaily }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    console.log('ropsSearch', propsSearch);
    console.log('propsDaily', propsDaily);

    const history = useHistory();
    useEffect(() => {
        console.log('propsSearch.success', propsSearch.success);
        if (propsSearch.success == 1) {

            console.log("propsSearch", propsSearch.data);
            if (propsSearch.data.search) {
                console.log(propsSearch.data.search.name);
                // Gọi Api ở đây
                const q = propsSearch.data.search.name;
                getDailyRequest(q);
            }

        } else {
            console.log('localStorage');
            const cityName = localStorage.getItem("cityName");
            console.log("11111", cityName);
            if (cityName) {
                getDailyRequest(cityName);
            } else {
                history.push({
                    pathname: "/",
                })
            }
        }

    }, [])

    if (propsDaily.success == 0) {
        return (
            <Loading />
        );
    } else {
        const localtime = propsDaily.data.daily.location.localtime;
        const dateTime = getFormatDate(localtime);
        const forecastDays = propsDaily.data.daily.forecast.forecastday;
        const current = propsDaily.data.daily.current;
        console.log('forecastDays', forecastDays);
        const location = propsDaily.data.daily.location;
    
        return (
            <>
                <DailyBody current={current} location={location} dateTime={dateTime} forecastDays={forecastDays} />
                <div className="row margin_bottom_normal">
                    <div className="col-12">
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        propsSearch: state.searchReducer,
        propsDaily: state.dailyReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getDailyRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(DailyWeatherPage);