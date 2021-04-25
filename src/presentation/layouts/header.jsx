import "../scss/header.scss";

const Header = () => {
    return (

        <div className="container-fluid fixed-top">
            <div className="row rowScssH1">
                <div className="col-2 offset-2 bg-warning">Logo</div>
                <div className="col-3 offset-3">
                        <div className="input-group groupScssH1">
                            <div className="input-group-prepend">
                                <button className="input-group-text">
                                    <i className="fa fa-search searchScssH1" aria-hidden="true"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control" placeholder="Tìm vị trí" />
                        </div>
                </div>
            </div>
        </div>

    );
}

export default Header;