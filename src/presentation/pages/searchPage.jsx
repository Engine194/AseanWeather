import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import '../css/styles.css';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getSearchRequest } from '../redux/effects/searchEffect';


const SearchPage = ({ getSearchRequest, propsSearch }) =>
{
    // khai báo state để hứng dữ liệu search
    const [searchItem, setSearchItem] = useState('');


    const history = useHistory();

    const handleSearch = async (e) => 
    {
        e.preventDefault();
        // nếu có searchItem thì mới gọi API
        if (searchItem) {
            // goi api search
            await getSearchRequest(searchItem);
        }
    }
    // sau khi đã có data thì thực hiện lệnh chuyển trang 
    if (propsSearch.data) {
        if (propsSearch.data.search) {
            history.push({
                pathname: "/main/current",
            })
        }
    }

    
    return (
        // form ui
        <form >
            <input className="Home_input"
                type="text"
                placeholder="Tìm kiếm vị trí"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <SearchIcon onClick={handleSearch} />
        </form>
    );
}

const mapStateToProps = (state) =>
{
    return {
        propsSearch: state.searchReducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchRequest,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);