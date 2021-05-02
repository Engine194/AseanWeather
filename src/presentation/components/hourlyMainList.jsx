import HourlyMain from "../components/hourlyMain";
const HourlyMainList = ({hourlyList}) => {
    return(
    <>
        {
            hourlyList.map(item => {
              return (
                <HourlyMain key={item.time_epoch} hour={item} />
              );  
            })
        }
    </>
    );
}
export default HourlyMainList;