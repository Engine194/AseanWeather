
const NavBar = () => {
    return (

        <div className="container-fluid" style={{ position: "absolute", top: "63px" }}>
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="row">
                        <div className="col text-center" >
                            <div className="nav-item">
                                <big className="nav-link">Hiện tại</big>
                            </div>
                        </div>
                        <div className="col text-center" >
                            <div className="nav-item">
                                <big className="nav-link">Theo giờ</big>
                            </div>
                        </div>
                        <div className="col text-center" >
                            <div className="nav-item">
                                <big className="nav-link">Hằng ngày</big>
                            </div>
                        </div>
                        <div className="col text-center" >
                            <div className="nav-item">
                                <big className="nav-link">Yêu thích</big>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default NavBar;