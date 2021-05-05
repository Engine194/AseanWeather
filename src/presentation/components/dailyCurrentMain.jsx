import { useEffect } from "react";
import { Card } from "react-bootstrap";
import getFormatDate from "../../data/configDate";
import getImage128URL from "../../data/configImage";
import { fixColorByTemp } from "../../data/configTempColor";

// Thẻ show ra thông tin thời tiết chung của địa phương
const DailyCurrentMain = ({ current }) => {
    
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
                        <div className="row border_bottom">
                            <div className="col text-center">
                                <div className="leftSide mt-1">
                                    <div className="temperature">
                                        {current.avgtemp_c}<span>&#176;</span>
                                    </div>
                                    <div className="condition-text">
                                        <b>{current.condition.text}</b>
                                    </div>
                                    <div className="condition-text">
                                        <small>Độ ẩm {current.avghumidity} %</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-center">
                                <div className="conditionimgDP1">
                                    <img src={getImage128URL(current.condition.icon)} alt="Icon Weather" />
                                    <div className="real-feel">
                                        <div className="under-icon"><small>Biên độ nhiệt</small></div>
                                        <div className="under-icon realFeel">
                                        <small>{current.maxtemp_c}<span>&#176;</span>C / {current.mintemp_c}<span>&#176;</span>C</small>
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

export default DailyCurrentMain;