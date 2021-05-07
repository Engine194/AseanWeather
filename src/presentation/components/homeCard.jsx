import getFormatDate from "../../data/configDate";

const HomeCart = ({location, current}) => {

    
    return (
        <div className="col mt-5 card_home" name="hanoi">
                    <div className="row mt-2">
                        <div className="col text-center" style={{ fontSize: "40px" }}>
                            {location.name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <i>{location.country}</i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center text-muted">
                            Cập nhật lần cuối:
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center text-muted">
                            {getFormatDate(current.last_updated).time} {getFormatDate(current.last_updated).date}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row mt-2">
                                <div className="col text-center temperature" style={{ fontSize: "90px" }}>
                                    {current.temp_c}<span>&#176;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  mt-2">
                        <div className="col text-center">
                            {current.condition.text}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col text-center">
                            Độ ẩm  {current.humidity} %
                        </div>
                    </div>
                </div>
    );
}

export default HomeCart;