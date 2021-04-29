import '../scss/LeftBar.scss';

const LeftBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <i className="fa fa-envelope-square colorScssLB1"  aria-hidden="true"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <i className="fa fa-facebook-square colorScssLB2" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftBar;