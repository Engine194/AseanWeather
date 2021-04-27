import React, { useRef, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import './styles.css';


function Search(props)
{
    // khai báo state
    const [searchItem, setSearchItem] = useState('');


    const history = useHistory();

    const typingTimeoutRef = useRef(null); // sử dụng useRef để khai bào default cho biến

    function handleSearch(e)
    {
        // e.preventDefault();
        const value = e.target.value;
        setSearchItem(value); // setstate

    
        // sử dụng clearTimeout để sử lý form khi điền đầy đủ thông tin thì sẽ sử lý submit
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() =>
        {
            const searchItems = {
                searchItem: value,
            }
            searchCitys(searchItems);
        }, 300); // sét timeout khi nhập vào form

    }
    function searchCitys()
    {
        if (!searchItem) return alert('vui lòng nhập lại');

        if (searchItem) {
            // khi kiểm tra input có giá trị thì push sang một trang khác có /....
            history.push({
                pathname: "/main/current",
                state: {
                    response: searchItem // đính kèm theo state 
                }
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