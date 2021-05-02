import HourlyMainList from "./hourlyMainList";
import '../scss/currentPage.scss';

const HourlyBody = ({ location, hourlyList }) => {
    return (
        <div className="row mt-3">
            <div className="col-12 card-custom">
                <div className="leftSide">
                    <div style={{ marginTop: 20 }}> <b style={{ fontSize: "25px" }}>Thời tiết hàng giờ</b></div>
                    <div style={{ color: "GrayText" }}>Kể từ {location.localtime}</div>
                </div>
                <HourlyMainList hourlyList={hourlyList} />
            </div>
        </div>
    );
};
export default HourlyBody;
