import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import CurrentAqi from "../components/currentAqi";
import CurrentAstronomySun from "../components/currentAstronomySun";
import CurrentDetail from "../components/currentDetail";
import CurrentMain from "../components/currentMain";
import Loading from "../components/loading";
import { getCurrentRequest } from "../redux/effects/currentEffect";
import { getAstroRequest } from "../redux/effects/astroEffect";
import '../scss/currentPage.scss';
import CurrentAstronomyMoon from "../components/currentAstronomyMoon";


const CurrentWeatherPage = ({ propsCurrent, propsAstro, getCurrentRequest, getAstroRequest }) => {

    // Gọi api ở đây và chỉ gọi 1 lần khi trang mới mở lên
    useEffect(() => {
        const q = "ha noi"
        getCurrentRequest(q);
        getAstroRequest(q);
    }, [])
    console.log("Astro", propsAstro);
    console.log("Current", propsCurrent);
    // Check xem trong store đã có dữ liệu trả về chưa, nếu chưa thì cho hiển thi màn hình loading ...
    if (propsCurrent.success == 1) {
        if (propsAstro.success == 0) {
            return (
                <Loading />
            );
        } else {
            const location = propsCurrent.data.current.location;
            const current = propsCurrent.data.current.current;
            const astronomy = propsAstro.data.astronomy.astronomy.astro;
            return (
                <>
                    <CurrentMain location={location} current={current} />
                    <CurrentDetail current={current} />
                    <CurrentAqi current={current} />
                    <CurrentAstronomySun astronomy={astronomy} />
                    <CurrentAstronomyMoon astronomy={astronomy} />
                </>
            );
        }
    } else {
        return (
            <Loading />
        );
    }
}
    


const mapStateToProps = (state) => {
    return {
        propsCurrent: state.currentReducer,
        propsAstro: state.astroReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentRequest,
    getAstroRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeatherPage);