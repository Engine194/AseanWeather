import { readBuilderProgram } from 'typescript';
import '../scss/LeftBar.scss';

const LeftBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 offset-0">
                        <i className="fa fa-envelope-square colorScssLB1"  aria-hidden="true"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 offset-0 mt-2">
                        <i className="fa fa-facebook-square colorScssLB2" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftBar;