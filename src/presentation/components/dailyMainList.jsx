import DailyMain from "./dailyMain";

const DailyMainList = ({ forecastDays}) =>
{
    return (
        <>
            {forecastDays.map(item =>
            {
                return (
                    <DailyMain forecastDay={item}/>
                );
            })}
        </>
    );
}
export default DailyMainList;