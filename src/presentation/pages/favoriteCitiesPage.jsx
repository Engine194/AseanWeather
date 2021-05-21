import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Loading from "../components/loading";
import { getFavoriteCurrentRequest } from "../redux/effects/favoriteCurrentEffect";
import '../scss/currentPage.scss';
import { markMenuInComponent, menuType } from "../../data/configMenu";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FavoriteMainList from "../components/favoriteMainList";
import { getFavoList } from "../../data/getFavoList";
import { removeFavoRequest } from "../redux/effects/removeFavoEffect";
import { getUserRequest } from "../redux/effects/getUserEffect";
import { Modal } from "react-bootstrap";

const FavoriteCities = ({ propsFavorite, propUser, getFavoriteCurrentRequest, removeFavoRequest, getUserRequest }) => {
    const [fbId, setFbId] = useState("");
    const [isShow, setIsShow] = useState(false);
    const history = useHistory();

    // Gọi api ở đây mỗi khi có kết quả từ propsSearch
    useEffect(() => {
        setIsShow(false);
        // Mark menu
        markMenuInComponent(menuType.FAVORITE);

        // const user = {
        //     id: 2,
        //     name: "Nguyễn Hoàng Giang",
        //     email: "nghoanggiang@gmail.com",
        //     facebookId: "1000000000000000",
        //     loginDate: "2021-05-10 00:00:00",
        //     favouriteCities: [
        //         {
        //             id: 1,
        //             name: "Bandar Seri Begawan"
        //         },
        //         {
        //             id: 2,
        //             name: "Kampung Kota Batu"
        //         },

        //         {
        //             id: 4,
        //             name: "Temburong"
        //         },
        //         {
        //             id: 5,
        //             name: "Melilas"
        //         },
        //         {
        //             id: 7,
        //             name: "Sihanoukville"
        //         },
        //         {
        //             id: 9,
        //             name: "Phnom Penh"
        //         },
        //         {
        //             id: 10,
        //             name: "Kratie"
        //         },
        //         {
        //             id: 11,
        //             name: "Bukittinggi"
        //         },
        //         {
        //             id: 12,
        //             name: "Yogyakarta"
        //         },
        //         {
        //             id: 47,
        //             name: "Ho Chi Minh City"
        //         }
        //     ]
        // }

        // localStorage.setItem('user', JSON.stringify(user));

        if (propUser.success == 1) {
            handleProcessUser(propUser.data.user);
        }

        if (propUser.success != 1) {
            let user = localStorage.getItem("user");
            user = JSON.parse(user);
            if (user) {
                handleProcessUser(user);
            } else {
                warningNotify("Hãy đăng nhập để trải nghiệm tính năng này!")
                document.querySelector("a.linkHomeHS").click();
            }
        }
    }, [propUser])

    const handleProcessUser = async (user) => {
        setFbId(user.facebookId);
        const results = getFavoList(user.favouriteCities);
        if (results.length > 0) {
            await getFavoriteCurrentRequest(results);
        } else {
            warningNotify("Bạn chưa có thành phố yêu thích nào!");
            document.querySelector("a.linkHomeHS").click();
        }
    }

    const handleDeleteFavo = (city) => {

        setIsShow(true)
        removeFavoRequest(fbId, city);

        setTimeout(() => {
            getUserRequest(fbId);
            setTimeout(() => {
                setIsShow(false);
            }, 500);
        }, 2000);
    }

    const warningNotify = (message) => {
        toast.warning(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    if (propsFavorite.success != 1) {
        return (
            <Loading />
        );
    } else {
        return (
            <>
                <FavoriteMainList dataWeather={propsFavorite.data.favorite} handleDelete={handleDeleteFavo} />
                <Modal show={isShow}>
                    <Modal.Body>
                        <h1>Loading ...</h1>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

// Lấy state của currentReducer và astroReducer từ store ra
const mapStateToProps = (state) => {
    return {
        propsFavorite: state.favoriteReducer,
        propUser: state.userReducer,
    }
}

// Đẩy hai action lấy api thời tiết hiện tại và thông tin thiên văn vào props của component
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getFavoriteCurrentRequest,
    removeFavoRequest,
    getUserRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities);