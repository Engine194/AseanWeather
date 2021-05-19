import HourlyMain from "../components/hourlyMain";
const HourlyMainList = ({hourlyList}) => {
    return(
    <>
        {
            hourlyList.map(item => {
              console.log("item",item);
              return (
                <HourlyMain key={item.time} hour={item} />
              );  
            })
        }
    </>
    );
}
export default HourlyMainList;