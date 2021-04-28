import { useState, useEffect } from "react";
import "../scss/navBar.scss";
import { connect } from "react-redux";
import getMenuAction from "../redux/actions/navBarAction";
import { useHistory } from "react-router";

const NavBar = ({ getMenu, propsMenu }) => {
    const [is1Clicked, setIs1Clicked] = useState(false);
    const [is2Clicked, setIs2Clicked] = useState(false);
    const [is3Clicked, setIs3Clicked] = useState(false);
    const [is4Clicked, setIs4Clicked] = useState(false);
    const history = useHistory();

    const rgba = (index1, index2) => {
        return `rgba(${index1},${index1},${index1},${index2})`;
    }

    const rgba4 = (index1, index2, index3, index4) => {
        return `rgba(${index1},${index2},${index3},${index4})`;
    }

    const markMenu = (element, path) => {
        document.querySelector(element).style.backgroundColor = rgba(255,1);
        document.querySelector(element).style.color = rgba4(255, 0, 0, 1);
        document.querySelector(element).style.borderBottomColor =  rgba4(255, 0, 0, 1);
        history.push(path);
    }

    const unmarkMenu = (element) => {
        document.querySelector(element).style.backgroundColor = rgba(235, 1);
        document.querySelector(element).style.color = rgba(0, 0.5);
    }

    // click vào menu1 thì đổi nền menu1 và khóa hết các menu còn lại. Tương tự với các hàm bên dưới
    const handleClick1 = () => {
        setIs1Clicked(true);
        markMenu("button.btnJS1","/main/current");
        setIs2Clicked(false);
        unmarkMenu("button.btnJS2");
        setIs3Clicked(false);
        unmarkMenu("button.btnJS3");
        setIs4Clicked(false);
        unmarkMenu("button.btnJS4");
    }

    const handleClick2 = () => {
        setIs1Clicked(false);
        unmarkMenu("button.btnJS1");
        setIs2Clicked(true);
        markMenu("button.btnJS2","/main/hours");
        setIs3Clicked(false);
        unmarkMenu("button.btnJS3");
        setIs4Clicked(false);
        unmarkMenu("button.btnJS4");
    }

    const handleClick3 = () => {
        setIs1Clicked(false);
        unmarkMenu("button.btnJS1");
        setIs2Clicked(false);
        unmarkMenu("button.btnJS2");
        setIs3Clicked(true);
        markMenu("button.btnJS3", "/main/days");
        setIs4Clicked(false);
        unmarkMenu("button.btnJS4");
    }

    const handleClick4 = () => {
        setIs1Clicked(false);
        unmarkMenu("button.btnJS1");
        setIs2Clicked(false);
        unmarkMenu("button.btnJS2");
        setIs3Clicked(false);
        unmarkMenu("button.btnJS3");
        setIs4Clicked(true);
        markMenu("button.btnJS4","/home");
    }



    let payload = {
        menu1: is1Clicked,
        menu2: is2Clicked,
        menu3: is3Clicked,
        menu4: is4Clicked,
    }

    // Đưa action vào useEffect với đk thay đổi is*Clicked thì mới chạy
    useEffect(() => {
        // Ban đầu khi tải lại trang, mặc định sẽ chọn vào current(menu1)
        if (!is1Clicked
            && !is2Clicked
            && !is3Clicked
            && !is4Clicked) {
            payload = {
                menu1: true,
                menu2: false,
                menu3: false,
                menu4: false,
            }
        }
        // gọi action lấy danh sách menu đã được chọn
        getMenu(payload);
    }, [is1Clicked, is2Clicked, is3Clicked, is4Clicked]);

    return (

        <div className="container-fluid" style={{ position: "absolute", top: "62px" }}>
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="row">
                        <button className="col btnScssNB1 btnJS1" onClick={handleClick1}>
                            HIÊN TẠI
                        </button>
                        <button className="col btnScssNB1 btnJS2" onClick={handleClick2}>
                            THEO GIỜ
                        </button>
                        <button className="col btnScssNB1 btnJS3" onClick={handleClick3}>
                            HẰNG NGÀY
                        </button>
                        <button className="col btnScssNB1 btnJS4" onClick={handleClick4}>
                            YÊU THÍCH
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        propsMenu: state.naviBarReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMenu: (payload) => dispatch(getMenuAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);