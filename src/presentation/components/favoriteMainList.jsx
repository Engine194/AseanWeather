import FavoriteMain from "./favoriteMain";

const FavoriteMainList = ({dataWeather, handleDelete}) => {

    return (
        <>
            {dataWeather.map(item => {
                const {city, location, current} = item;
                return (
                    <FavoriteMain key={location.name} location={location} current={current} handleDelete={handleDelete} city={city}/>
                );
            })}
        </>
    );
}

export default FavoriteMainList;