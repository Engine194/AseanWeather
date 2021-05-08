import "../scss/header.scss";
import logo from "../../data/weatherImgs/logo.png";
import linkHome from "../../data/api/linkHome";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row rowScssH1">
                <div className="col-1 offset-3">
                    <a href={linkHome}>
                    <img src={logo} width="73" alt="Logo" />
                    </a>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-6 offset-4">
                            <div className="input-group groupScssH1">
                                <div className="input-group-prepend">
                                    <button className="input-group-text">
                                        <i className="fa fa-search searchScssH1" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control" placeholder="Tìm vị trí" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="groupScssH1">
                                <button className=" btn btn-light login">LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;