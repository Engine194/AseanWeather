import logo from '../../data/weatherImgs/logo.png';
import background from '../../data/weatherImgs/Backgroup.jpg';
import React from 'react';
import SearchPage from '../pages/searchPage';
import '../css/HomeHeader.css';
import linkHome from '../../data/api/linkHome';

// import { func } from 'prop-types';


const HeaderHome = () => {
    return (
        <div className="Home_header"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="Home_logo">
                <a href={linkHome}>
                    <img src={logo} alt="Home Logo" />
                </a>
            </div>
            <div className="row Home_search">
                <SearchPage />
            </div>
            <div className="Home_login">
                <button type="button"  >LOGIN</button>
            </div>
        </div >

    );
}

export default HeaderHome;