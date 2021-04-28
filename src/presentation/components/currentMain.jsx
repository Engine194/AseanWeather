import { Card } from "react-bootstrap";
import getFormatDate from "../../data/configDate";
import getImage128URL from "../../data/configImage";

const CurrentMain = ({location, current}) => {
    return (
        <>
        <div className="row mt-3">
                    <div className="col-12 card-custom">
                        <Card.Body>
                            <div className="row">
                                <div className="col">
                                    <div className="leftSide mt-1">
                                        <Card.Title>{location.name}, {location.country}</Card.Title>
                                        <Card.Subtitle className="text-muted">Cập nhật lần cuối: {getFormatDate(current.last_updated).time} {getFormatDate(current.last_updated).date}</Card.Subtitle>
                                        <div className="temperature">
                                            {current.temp_c}<span>&#176;</span>
                                        </div>
                                        <div className="condition-text">
                                            <b>{current.condition.text}</b>
                                        </div>
                                        <div className="condition-text">
                                            <small>Độ ẩm {current.humidity}%</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="condition-img">
                                        <img src={getImage128URL(current.condition.icon)} alt="Icon Weather" />
                                        <div className="real-feel">
                                            <div className="under-icon"><small>Mây Phủ : {current.cloud}%</small></div>
                                            <div className="under-icon"><small>Real Feel : {current.feelslike_c}<span>&#176;</span></small></div>
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

export default CurrentMain;