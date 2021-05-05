import { useEffect } from "react";
import { Card } from "react-bootstrap";
import getFormatDate from "../../data/configDate";
import getImage128URL from "../../data/configImage";
import { fixColorByTemp } from "../../data/configTempColor";

// Thẻ show ra thông tin thời tiết chung của địa phương
const CurrentMain = ({ location, current }) => {
    
    // Gọi một số hàm xử lý kết quả khi khởi tạo trang
    useEffect(()=>{
        // Đổi màu hiển thị của nhiệt độ tùy vào nhiệt độ nóng hay lạnh
        fixColorByTemp(current.temp_c, "div.temperature");

        // Đổi màu hiển thị real feel tùy vào nhiệt độ nóng hay lạnh
        fixColorByTemp(current.feelslike_c, "div.realFeel");
    },[])

    return (
        <>
            <div className="row mt-3 mb-1">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row">
                            <div className="col text-center">
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
                                        <small>Độ ẩm {current.humidity} %</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="condition-img">
                                    <img src={getImage128URL(current.condition.icon)} alt="Icon Weather" />
                                    <div className="real-feel">
                                        <div className="under-icon"><small>Real Feel</small></div>
                                        <div className="under-icon realFeel">
                                        <small>{current.feelslike_c}<span>&#176;</span>C</small>
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

export default CurrentMain;