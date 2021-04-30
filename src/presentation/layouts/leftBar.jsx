import '../scss/leftBar.scss';

const LeftBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <a><i className="fa fa-envelope-square colorScssLB1 onHover"  aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <a><i className="fa fa-facebook-square colorScssLB2 onHover" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftBar;