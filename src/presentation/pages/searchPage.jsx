import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import '../css/styles.css';
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getSearchRequest } from '../redux/effects/searchEffect';
import { getSearchV2Request } from '../redux/effects/searchV2Effect';
import getSearchV3 from '../redux/actions/searchV3Action';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import "../scss/homePage.scss";

const filter = createFilterOptions();

const SearchPage = ({ getSearchRequest, propsSearch, getSearchV2Request, propsSearchV2, getSearchV3, propsSearchV3 }) => {
    // khai báo state để hứng dữ liệu search
    const [searchItem, setSearchItem] = useState(null);
    const options = [];
    const history = useHistory();

    const handleSearch = async (e) => {
        e.preventDefault();

        // nếu có searchItem thì mới gọi API
        if (searchItem) {
            // gọi action lưu kết quả lại vào trong redux
            getSearchV3(searchItem);
        }
    }

    const handleChange = async (e) => {
        setSearchItem(e.target.value)
        getSearchV2Request(searchItem);
    }

    useEffect(() => {

    }, [])

    // sau khi đã có data thì thực hiện lệnh chuyển trang 
    if (propsSearchV3.success == 1) {
        history.push({
            pathname: "/main/current",
        })
    }

    if (propsSearchV2.success == 1) {
        const searches = propsSearchV2.data.search;
        searches.forEach(element => {
            options.push(element.name);
        });
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <div className="row">
                    <div className="col">

                        <Autocomplete
                            value={searchItem}
                            onChange={handleChange}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);
                                return filtered;
                            }}
                            selectOnFocus
                            clearOnBlur
                            freeSolo
                            handleHomeEndKeys
                            id="inputSearch"
                            options={options}
                            getOptionLabel={option => {
                                if (typeof option === 'string') {
                                    return option;
                                }
                                console.log("getOptionLabel",option);
                                return option;
                            }}
                            renderOption={(option) => {
                                return option}}
                            
                            renderInput={(params) => (
                                <>
                                    <div className="text-center" ref={params.InputProps.ref}>
                                        <input
                                            {...params.inputProps}
                                            id="inputSearch"
                                            type="text"
                                            placeholder="Tìm kiếm vị trí"
                                            onChange={handleChange}
                                        />
                                        <button type="submit" style={{ width: "15%", height: "48px", position: "relative", bottom: "6px" }} className="btn btn-primary" onClick={handleSearch}>
                                            <SearchIcon className="searchIcon" />
                                        </button>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </div>
            </form>


        </>
    );
}

const mapStateToProps = (state) => {
    return {
        propsSearch: state.searchReducer,
        propsSearchV2: state.searchV2Reducer,
        propsSearchV3: state.searchV3Reducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchRequest,
    getSearchV2Request,
    getSearchV3,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);