import { Card } from "react-bootstrap";
import { moonPhaseToVi } from "../../data/configMoonphase";
import moonrise from "../../data/weatherImgs/moonrise.png";
import moonset from "../../data/weatherImgs/moonset.png";

const currentAstronomyMoon = ({astronomy}) => {
    return (
        <>
        <div className="row mt-3 mb-1">
                <div className="col-12 card-custom">
                    <Card.Body>
                        <div className="row">
                            <div className="col colScssCD2 colScssCD3">
                                <div className="leftSide mt-2">
                                    <div className="row mb-1">
                                        <div className="col-12 text-center">
                                            <big><b>NGUYỆT VĂN</b></big>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                    <div className="col-6 text-center">
                                            <div className="row">
                                                <div className="col-5 offset-1">
                                                    <img src={moonrise} />
                                                </div>
                                                <div className="col-4">
                                                    <div className="showAstroSunTime">{astronomy.moonrise}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 text-center">
                                            <div className="row">
                                                <div className="col-5 offset-1">
                                                    <img src={moonset} />
                                                </div>
                                                <div className="col-4">
                                                    <div className="showAstroSunTime">{astronomy.moonset}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col colScssCD1">
                                <div className="leftSide mt-1">
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-wpexplorer showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-3">
                                            Chu kỳ
                                        </div>
                                        <div className="col-8 textRight mr-3">
                                            {moonPhaseToVi(astronomy.moon_phase)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col colScssCD2 colScssCD3">
                                <div className="leftSide mt-1">
                                    <div className="row border-bottom mb-3">
                                        <div className="col-1 text-center"><i className="fa fa-adjust showIconDetail" aria-hidden="true"></i></div>
                                        <div className="col-6">
                                            Độ phản chiếu
                                        </div>
                                        <div className="col-5 textRight">
                                            {astronomy.moon_illumination} %
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

export default currentAstronomyMoon;