import { useHistory } from "react-router";
import getFormatDate from "../../data/configDate";
import getImage128URL from "../../data/configImage";

const HomeCart = ({location, current}) => {
    
    const history = useHistory();

    const handlePush = () => {
        let name = location.name;
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        history.push({
            pathname: "/main/current",
            search: `${name}%7C`
        })
    }
    
    return (
        <div className="col mt-3 card_home" onClick={handlePush} name="hanoi" title="Click for more information">
                    <div className="row mt-2">
                        <div className="col text-center" style={{ fontSize: "30px" }}>
                            {location.name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <i><small>{location.country}</small></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col text-center ">
                                    <img src={getImage128URL(current.condition.icon)} alt="Icon Weather" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center" style={{marginTop: "-15px"}}>
                            <span className="temperatureHP" style={{fontSize: "24px"}}>{current.temp_c}<span>&#176;</span></span>, {current.condition.text}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            Độ ẩm  {current.humidity} %
                        </div>
                    </div>
                    <div className="row updateInfor">
                        <div className="col text-center text-muted mt-3 mb-2">
                            <i>Cập nhật lần cuối: {getFormatDate(current.last_updated).time} {getFormatDate(current.last_updated).date}</i>
                        </div>
                    </div>
                </div>
    );
}

export default HomeCart;