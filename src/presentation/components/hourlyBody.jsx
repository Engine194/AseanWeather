import HourlyMainList from "./hourlyMainList";
import '../scss/currentPage.scss';
import '../scss/hourlyPage.scss';
const HourlyBody = ({ location, hourlyList }) => {
    return (
        <div className="row mt-3">
            <div className="col-12 card-custom">
                <div className="leftSizeHour">
                    <div className="colScss4"> <b>Thời tiết hàng giờ</b></div>
                    <div className="colorLocaltime">Kể từ {location.localtime}</div>
                </div>
                <HourlyMainList hourlyList={hourlyList} />
            </div>
        </div>
    );
};
export default HourlyBody;
