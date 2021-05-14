import { connect } from 'react-redux';
import { convertCity } from '../../data/api/apiRequest';
import '../scss/leftBar.scss';

const LeftBar = ({ propsSearch }) => {
    let searchEmail = "";
    const search = () => {
        if (propsSearch.success == 1) {
            searchEmail = propsSearch.data.search;
            return convertCity(propsSearch.data.search);
        } else {
            const cityName = localStorage.getItem("cityName");
            if (cityName) {
                searchEmail = cityName;
                return convertCity(cityName);
            } else {
             return null;
            }
        }
    }
    const searchValue = search();
    console.log(searchEmail, "searchEmail");
    const hrefFB = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fasean-weather.herokuapp.com/main/current?Bandar+Seri+Begawan;src=sdkpreparse`;
    const hrefEmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=https://asean-weather.herokuapp.com/main/current?${searchEmail}`;
    return (
        <>
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=167699161842268&autoLogAppEvents=1" nonce="e5CdrVam"></script>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <a href={hrefEmail}><i className="fa fa-envelope-square colorScssLB1 onHover" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <a target="_blank" data-href={hrefFB} className="fb-xfbml-parse-ignore"><i className="fa fa-facebook-square colorScssLB2 onHover" aria-hidden="true" data-layout="button"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        propsSearch: state.searchV3Reducer,
    }
}

export default connect(mapStateToProps, null)(LeftBar);