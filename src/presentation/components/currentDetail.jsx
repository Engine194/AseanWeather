import { Card } from "react-bootstrap";
import windDirection from "../../data/configWindDirection";
import '../scss/currentPage.scss';

const CurrentDetail = ({ current }) => {
    

    return (
        <>
            <div className="row mt-3 mb-1">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row">
                            <div className="col colScssCD1">
                                <div className="leftSide mt-1">
                                    <div className="row border-bottom mb-2">
                                        <div className="col-1 text-center"><i className="fa fa-superpowers showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Vận tốc gió
                                        </div>
                                        <div className="col-5 textRight mr-3">
                                            {current.wind_kph}-{current.gust_mph} m/s
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-2">
                                        <div className="col-1 text-center"><i className="fa fa-location-arrow showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Gió hướng
                                        </div>
                                        <div className="col-5 textRight mr-3">
                                            {windDirection(current.wind_dir)}
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-2">
                                        <div className="col-1 text-center"><i className="fa fa-thermometer-empty showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Áp suất khí quyển
                                        </div>
                                        <div className="col-5 textRight mr-3">
                                            {current.pressure_mb} mb
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col colScssCD2 colScssCD3">
                                <div className="leftSide mt-1">
                                    <div className="row border-bottom mb-2">
                                        <div className="col-1 text-center"><i className="fa fa-low-vision showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Tầm nhìn
                                        </div>
                                        <div className="col-5 textRight">
                                            {current.vis_km} km
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-2">
                                        <div className="col-1 text-center"><i className="fa fa-sun-o showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Chỉ số UV
                                        </div>
                                        <div className="col-5 textRight">
                                            {current.uv}
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-2">
                                        <div className="col-1 mr-1 text-center"><i className="fa fa-cloud showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Mây che phủ
                                        </div>
                                        <div className="col-5 textRight">
                                            {current.cloud}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </>
    );
}

export default CurrentDetail;