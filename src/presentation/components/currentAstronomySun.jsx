import { Card } from "react-bootstrap";
import sunrise from "../../data/weatherImgs/sunrise.png";
import sunset from "../../data/weatherImgs/sunset.png";

// Thẻ show ra thông tin thiên văn của mặt trời
const CurrentAstronomySun = ({ astronomy }) => {
    return (
        <>
            <div className="row mt-3 mb-1">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row">
                            <div className="col colScssCD1">
                                <div className="leftSide mt-2">
                                    <div className="row mb-1 ">
                                        <div className="col-12 text-center">
                                            <big><b>NHẬT VĂN</b></big>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-6 text-center">
                                            <div className="row">
                                                <div className="col-5 offset-1">
                                                    <img src={sunrise} />
                                                </div>
                                                <div className="col-4">
                                                    <div className="showAstroSunTime">{astronomy.sunrise}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 text-center">
                                            <div className="row">
                                                <div className="col-5 offset-1">
                                                    <img src={sunset} />
                                                </div>
                                                <div className="col-4">
                                                    <div className="showAstroSunTime">{astronomy.sunset}</div>
                                                </div>
                                            </div>
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

export default CurrentAstronomySun;