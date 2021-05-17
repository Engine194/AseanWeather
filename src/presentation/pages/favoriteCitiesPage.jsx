import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import CurrentMain from "../components/currentMain";
import Loading from "../components/loading";
import { getFavoriteCurrentRequest } from "../redux/effects/favoriteCurrentEffect";
import '../scss/currentPage.scss';
import { markMenuInComponent, menuType } from "../../data/configMenu";
import { useHistory } from 'react-router';

const FavoriteCities = ({ propsFavorite, getFavoriteCurrentRequest }) => {
    const history = useHistory();
    const [favorites, setFavorites] = useState(["Ha noi", "Da nang", "Kampot", "Singapore"]);
       // Gọi api ở đây mỗi khi có kết quả từ propsSearch
    useEffect(() => {
        // Mark menu
        markMenuInComponent(menuType.FAVORITE);
        if (favorites.length > 0) {
            getFavoriteCurrentRequest(favorites);
        }
    },[])

console.log(propsFavorite.data);

    if (propsFavorite.success != 1) {
        return (
            <Loading/>
        );
    } else {
        return (
            <>
            <h1>aaaaaaaaaaaaaaaaaaaaaaa</h1>
            </>
        );
    }
}





// Lấy state của currentReducer và astroReducer từ store ra
const mapStateToProps = (state) => {
    return {
        propsFavorite: state.favoriteReducer,
    }
}

// Đẩy hai action lấy api thời tiết hiện tại và thông tin thiên văn vào props của component
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getFavoriteCurrentRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities);