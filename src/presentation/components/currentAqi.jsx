import { useEffect } from "react";
import { Card } from "react-bootstrap";
import aqi from "../../data/configAQI";

// Thẻ show ra thông tin của chất lượng không khí (AQI)
const CurrentAqi = ({ current }) => {
    // Lấy ra chỉ số us-epa-index trong kết quả trả về
    const values = Object.values(current.air_quality);
    const usEpaIndex = values[6];
    
    useEffect(() => {
        // Đổi màu hiển thị đánh giá AQI tùy vào mức độ ô nhiễm
        aqi.fixColorOfAqi(usEpaIndex, "div.aqi");
    }, []);

    return (
        <>
            <div className="row mt-3 mb-1">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row">
                            <div className="col colScssCD1">
                                <div className="leftSide mt-2">
                                    <div className="row mb-2">
                                        <div className="col-12 text-center">
                                            <big><b>CHẤT LƯỢNG KHÔNG KHÍ</b></big>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="showAqi aqi">
                                            {aqi.convertAQItoString(usEpaIndex)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col colScssCD2 colScssCD3">
                                <div className="leftSide mt-1">
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            Ảnh hưởng tới sức khỏe
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col text-muted reviewAqi">
                                                <i><small>{aqi.reviewAqi(usEpaIndex)}</small></i>
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

export default CurrentAqi;