import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { convertCity } from '../../data/api/apiRequest';
import '../scss/leftBar.scss';

const LeftBar = ({ propsSearch }) => {
    const [city, setCity] = useState('');
    const [searchEmail, setSearchEmail] = useState("");
    useEffect(() => {
        if (propsSearch.success == 1) {
            let cityName = propsSearch.data.search;
            setCity(cityName);
            handleConverCityToURL(cityName);
        } else {
            let cityName = localStorage.getItem("cityName");
            setCity(cityName);
            if (cityName) {
                handleConverCityToURL(cityName);
            }
        }
    }, [searchEmail, propsSearch.data.search])

    const handleConverCityToURL = (name) => {
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        name = name.replace(" ", "_");
        setSearchEmail("/main/current?" + name + "|");
    }

    const emailSubject = "Let's see this interesting site!";
    const emailBody = `Check out the weather of ${city}: %0D%0A https://asean-weather.herokuapp.com${searchEmail}`;
    const hrefFB = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fasean-weather.herokuapp.com${searchEmail};src=sdkpreparse`;
    const hrefEmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=${emailSubject}&body=${emailBody}`;

    return (
        <>
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=521933395496343&autoLogAppEvents=1" nonce="e5CdrVam"></script>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <a target="_blank" href={hrefEmail} title="Share By Email Automatically"><i className="fa fa-envelope-square colorScssLB1 onHover" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-2">
                        <a target="_blank" href={hrefFB} className="fb-xfbml-parse-ignore"><i className="fa fa-facebook-square colorScssLB2 onHover" aria-hidden="true" data-layout="button"></i></a>
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