import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import CurrentDetail from "../components/currentDetail";
import CurrentMain from "../components/currentMain";
import Loading from "../components/loading";
import { getCurrentRequest } from "../redux/effects/currentEffect"
import '../scss/currentPage.scss';


const CurrentWeatherPage = ({ propsCurrent, getCurrentRequest }) =>
{
    const valueSearch = localStorage.getItem("Search");
  
    // Gọi api ở đây và chỉ gọi 1 lần khi trang mới mở lên
    useEffect(() =>
    {
        getCurrentRequest(valueSearch);
    }, [])
    
    // Check xem trong store đã có dữ liệu trả về chưa, nếu chưa thì cho hiển thi màn hình loading ...
    if (propsCurrent.success === 0) {
        return (
            <Loading />
        );
    } else {
     
        const location = propsCurrent.data.current.location;
        const current = propsCurrent.data.current.current;
        return (
            <>
                <CurrentMain location={location} current={current} />
                <CurrentDetail current={current} />
            </>
        );
    }
}
export const  getProps = (props) =>
{
    return (
        props.location.state
    )
}
const mapStateToProps = (state) =>
{
    return {
        propsCurrent: state.currentReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getCurrentRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps )(CurrentWeatherPage);