

const Header = () =>
{

    return (

        <div className="container-fluid fixed-top">
            <div className="row" style={{ height: "63px", backgroundColor: "rgba(0,0,0,1)" }}>
                <div className="col-2 offset-2 bg-warning">
                    <img src="" width="50px" height="auto" alt="logo" />
                </div>
                <div className="col-2 offset-4">
                    <div className="input-group input-group-sm mt-3">
                        <div className="input-group-prepend">
                            <button className="input-group-text">
                                <i className="fa fa-search" style={{ fontSize: "18px" }} aria-hidden="true"></i>
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