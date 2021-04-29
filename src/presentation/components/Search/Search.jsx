import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import './styles.css';


function Search()
{
    // khai báo state
    const [searchItem, setSearchItem] = useState('');


    const history = useHistory();

    function handleSearch(e)
    {
        // e.preventDefault();
        const value = e.target.value;
        setSearchItem(value); // setstate
    }
    function searchCitys()
    {
        localStorage.setItem("Search", searchItem);
        if (!searchItem) return alert('vui lòng nhập lại');
        if (searchItem) {
            // khi kiểm tra input có giá trị thì push sang một trang khác có /....
            history.push({
                pathname: "/main/current",
            
            })
        }
    }
    return (
        // form ui
        <form onSubmit={searchCitys} >
            <input className="Home_input"
                type="text"
                placeholder="Tìm kiếm vị trí"
                value={searchItem}
                onChange={handleSearch} />
            <SearchIcon onClick={searchCitys} />
        </form>
    );
}

export default Search;