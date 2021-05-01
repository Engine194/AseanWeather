import { Collapse, Button, CardBody, Card } from 'reactstrap';
import React, { useState } from 'react';
import getFormatDate from '../../data/configDate';
import "../scss/hourlyPage.scss";
import windDirection from '../../data/configWindDirection';
import '../scss/currentPage.scss';


const HourlyMain = ({ location, hour }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <> <div className="row mt-3">
            <div className="col-12 colScss1"  >
                <div className="row" style={{ margin: 15 }}>
                    <div className="col-1" >
                            <div className="mgHour">
                                {getFormatDate(hour.time).time}
                            </div>
                    </div>
                    <div className="col-1">
                        <div className="mgTemp" >
                            <big><b>{hour.temp_c}<span>&#176;</span></b></big>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="row">
                            <div className="col center" >
                                <img src={hour.condition.icon} alt="Icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-2" >
                            <div className="mgCondition">
                                {hour.condition.text}</div>
                    </div>
                    <div className="col-3 center" >
                        <div className="row" >
                            <div className="col center mgRain" >
                                Khả năng mưa
                                </div>
                        </div>
                        <div className="row" >
                            <div className="col center" >
                                <b>{hour.chance_of_rain}%</b>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row" >
                            <div className="col center mgHumidity" >
                                    Độ ẩm
                                </div>
                        </div>
                        <div className="row" >
                            <div className="col center">
                               <b>{hour.humidity}%</b>
                                </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <i class="fa fa-sort-desc mgIcon"  aria-hidden="true" onClick={toggle}></i>
                    </div>
                </div>
                <div>
                    <Collapse isOpen={isOpen}>
                        <Card style={{ marginBottom: 10 }}>
                            <CardBody>
                                <div className="row">
                                    <div className="col colScssCD1">
                                        <div className="leftSide mt-1">
                                            <div className="row border-bottom mb-2">
                                                <div className="col-1 text-center"><i className="fa fa-superpowers showIconDetail" aria-hidden="true"></i></div>
                                                <div className="col-6">
                                                    Vận tốc gió
                                        </div>
                                                <div className="col-5 textRight mr-3">
                                                    {hour.wind_kph} m/s
                                        </div>
                                            </div>
                                            <div className="row border-bottom mb-2">
                                                <div className="col-1 text-center"><i className="fa fa-location-arrow showIconDetail" aria-hidden="true"></i></div>
                                                <div className="col-4">
                                                    Gió hướng
                                        </div>
                                                <div className="col-7 textRight mr-3">
                                                    {windDirection(hour.wind_dir)}
                                                </div>
                                            </div>
                                            <div className="row border-bottom mb-2">
                                                <div className="col-1 text-center"><i className="fa fa-thermometer-empty showIconDetail" aria-hidden="true"></i></div>
                                                <div className="col-7">
                                                    Áp suất khí quyển
                                        </div>
                                                <div className="col-4 textRight mr-3">
                                                    {hour.pressure_mb} mb
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
                                                    {hour.vis_km} km
                                        </div>
                                            </div>
                                            <div className="row border-bottom mb-2">
                                                <div className="col-1 text-center"><i className="fa fa-sun-o showIconDetail" aria-hidden="true"></i></div>
                                                <div className="col-6">
                                                    Chỉ số UV
                                        </div>
                                                <div className="col-5 textRight">
                                                    {hour.uv}
                                                </div>
                                            </div>
                                            <div className="row border-bottom mb-2">
                                                <div className="col-1 mr-1 text-center"><i className="fa fa-cloud showIconDetail" aria-hidden="true"></i></div>
                                                <div className="col-6">
                                                    Mây che phủ
                                        </div>
                                                <div className="col-5 textRight">
                                                    {hour.cloud}%
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
            <div>
            </div>
        </div>
        </>
    )
}
export default HourlyMain;