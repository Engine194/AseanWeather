import FavoriteMain from "./favoriteMain";

const FavoriteMainList = ({dataWeather}) => {

    return (
        <>
            {dataWeather.map(item => {
                const {location, current} = item;
                return (
                    <FavoriteMain key={location.name} location={location} current={current} />
                );
            })}
        </>
    );
}

export default FavoriteMainList;