import HourlyMainList from "./hourlyMainList"

const HourlyBody = ({location,hourlyList}) =>{
    return (
        <div className="row mt-3">
        <div className="col-12" style={{ backgroundColor: "white", borderRadius: "5px", }} >
            <div style={{marginTop:20}}> <b style={{ fontSize: "25px" }}>Thời tiết hàng giờ</b></div>
            <div style={{ color: "GrayText" }}>Kể từ {location.localtime}</div>
            <HourlyMainList location={location} hourlyList={hourlyList}/>  


        </div>
        </div>    
    );
};
export default HourlyBody
