import { Card } from "react-bootstrap";
import '../scss/currentPage.scss';
import '../css/index.css'
const CurrentDetail = ({ current }) => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row">
                            <div className="col">
                                <div className="leftSide mt-1">
                                    <Card.Title>Thông tin chi tiết</Card.Title>
                                    <div className="row">
                                        <div className="col-7">
                                            Tốc độ gió 
                                        </div>
                                        <div className="col-5 textRight">
                                            10-15 m/s
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-7">
                                        <i className="fa fa-location-arrow showIconDetail" aria-hidden="true"></i>  Hướng gió
                                        </div>
                                        <div className="col-5 textRight">
                                            Đông Nam
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-7">
                                        <i className="fa fa-thermometer-empty showIconDetail" aria-hidden="true"></i>  Áp suất khí quyển
                                        </div>
                                        <div className="col-5 textRight">
                                            1000 mb
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">

                            </div>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </>
    );
}

export default CurrentDetail;