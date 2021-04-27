const LeftBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 offset-0">
                        <i className="fa fa-envelope-square" style={{ color: "rgba(234, 67, 53,1)", fontSize: "36px", position: "relative", top: "103px" }} aria-hidden="true"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 offset-0">
                        <i className="fa fa-facebook-square" style={{ color: "rgba(66,103,178,1)", fontSize: "36px", position: "relative", top: "103px" }}aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftBar;