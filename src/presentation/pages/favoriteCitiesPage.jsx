import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import CurrentMain from "../components/currentMain";
import Loading from "../components/loading";
import { getFavoriteCurrentRequest } from "../redux/effects/favoriteCurrentEffect";
import '../scss/currentPage.scss';
import { markMenuInComponent, menuType } from "../../data/configMenu";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FavoriteMainList from "../components/favoriteMainList";

const FavoriteCities = ({ propsFavorite, getFavoriteCurrentRequest }) => {
    
    const history = useHistory();
    const [favorites, setFavorites] = useState([]);
       // Gọi api ở đây mỗi khi có kết quả từ propsSearch
    useEffect(() => {
        // Mark menu
        markMenuInComponent(menuType.FAVORITE);

        let user = localStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
            const favouriteCities = user.favouriteCities;
            const results = [];
            for (let index = 0; index < favouriteCities.length; index++) {
                const element = favouriteCities[index];
                results.push(element.name);
            }
            setFavorites(results);
            if (favorites.length > 0) {
                getFavoriteCurrentRequest(favorites);
            } else {
                warningNotify();
                const linkHomeHS = document.querySelector("a.linkHomeHS");
                linkHomeHS.click();
            }
        }
        

    },[])

    const warningNotify = () => {
        toast.warning("Vui lòng đăng nhập để trải nghiệm tính năng này", {
            position: "top-center",
            autoClose: 8000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }

    console.log("propsFavorite.data",propsFavorite.data);
    console.log("favorites",favorites);
    if (propsFavorite.success != 1) {
        return (
            <Loading/>
        );
    } else {
        return (
            <>
            <FavoriteMainList dataWeather={propsFavorite.data} />
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