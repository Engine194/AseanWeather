import logo from './../../Assets/logo.png';
import background from './../../Assets/Backgroup.jpg';
import React from 'react';
import './HomeHeader.css';

// import { func } from 'prop-types';
import Search from './../components/Search/Search';

const HeaderHome = (props) =>
{
    return (
        <div className="Home_header"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="Home_logo">
                <img src={logo} alt="" />
            </div>
            <div className="Home_search">
              <Search/>
            </div>
            <div className="Home_login">
                <button type="button"  >LOGIN</button>
            </div>
        </div >

    );
}

export default HeaderHome;