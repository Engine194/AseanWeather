import HourlyMain from "../components/hourlyMain";
const HourlyMainList = ({hourlyList,location}) => {
    return(
    <>
        {
            hourlyList.map(item => {
              return (
                <HourlyMain location={location} hour={item} />
              );  
            })
        }
    </>
    );
}
export default HourlyMainList;