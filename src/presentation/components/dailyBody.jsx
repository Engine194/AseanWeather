import DailyMainList from "./dailyMainList";
import '../scss/currentPage.scss';
import '../scss/hourlyPage.scss';
import '../scss/dailyPage.scss';

const DailyBody = ({ location, dateTime, forecastDays }) =>
{
    return (
        <div className="row mt-3">
            <div className="col-12 card-custom">
                <div className="row rowScssDP1">
                    <div className="col-12 colScss1">
                        <div style={{ marginTop: 20 }}> <b style={{ fontSize: "25px" }}>Thời tiết ba ngày</b></div>
                        <div style={{ color: "GrayText" }}>{location.name}, {location.country}</div>
                        <div style={{ color: "GrayText" }}>Kể từ {dateTime.time} {dateTime.date}</div>
                    </div>
                </div>
                <DailyMainList forecastDays={forecastDays} />
            </div>
        </div>
    );
};
export default DailyBody;