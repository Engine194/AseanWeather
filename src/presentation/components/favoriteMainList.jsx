import CurrentMain from "./currentMain";

const FavoriteMainList = ({dataWeather}) => {

    const {location, current} = dataWeather;

    return (
        <>
            {dataWeather.map(item => {
                return (
                    <CurrentMain location={location} current={current} />
                );
            })}
        </>
    );
}

export default FavoriteMainList;