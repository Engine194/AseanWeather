import '../scss/footer.scss';

const Footer = () => {
    return (
        <>
        <div className="container-fluid fixed-bottom">
            <div className="row rowScssF1">
                <div className="col-1 offset-2">Logo mini</div>
                <div className="col-6">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-3"><i className="fa fa-circle-o circleScssF1" aria-hidden="true"></i> <b><small>Phản hồi</small></b></div>
                        <div className="col-3"><i className="fa fa-circle-o circleScssF1" aria-hidden="true"></i> <b><small>WeatherAPI</small></b></div>
                        <div className="col-3"><i className="fa fa-circle-o circleScssF1" aria-hidden="true"></i> <b><small>Phòng họp báo</small></b></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                    <div className="col"></div>
                        <div className="col-3"><i className="fa fa-circle-o circleScssF1" aria-hidden="true"></i> <b><small>Điều khoản sử dụng</small></b></div>
                        <div className="col-3" ><i className="fa fa-circle-o circleScssF1" aria-hidden="true"></i> <b><small>Chính sách riêng tư</small></b></div>
                        <div className="col-3"><i className="fa fa-circle-o circleScssF1" aria-hidden="true"></i> <b><small>Q&A</small></b></div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col-1">logo mini</div>
            </div>
            <div className="row rowScssF1">
                <div className="col-8 offset-2 text-center">
                    <i><small>Chúng tôi công nhận trách nhiệm sử dụng dữ liệu và công nghệ của mình vĩnh viễn</small></i>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;