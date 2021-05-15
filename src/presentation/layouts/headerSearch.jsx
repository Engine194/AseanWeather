import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "../scss/header.scss";
import logo from "../../data/weatherImgs/logo.png";
import linkHome from "../../data/api/linkHome";
import '../css/HomeHeader.css';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getSearchV2Request } from '../redux/effects/searchV2Effect';
import getSearchV3 from '../redux/actions/searchV3Action';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import firebase from 'firebase';
import Login from '../components/Login';


const filter = createFilterOptions();

toast.configure();
const HeaderSearch = ({ getSearchV2Request, propsSearchV2, getSearchV3, propsSearchV3, propMenu }) => {
    const [searchItem, setSearchItem] = useState(null);
    const [isMatch, setIsMatch] = useState(false);
    const [isShowErr, setIsShowErr] = useState(false);
    const [isShowEmpty, setIsShowEmpty] = useState(false);
    const [isSumimited, setIsSumimited] = useState(false);
    const options = [];
    const history = useHistory();

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const [displayName, setDisplayName] = useState("");
    
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
            setIsSignedIn(!!user);
            if (!!user) {
              console.log("user", user);
              setDisplayName(user.displayName);
              console.log("user.email", user.email);
              console.log("user.photoURL", user.photoURL);
            }
      
          });
          return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();
        setIsSumimited(true);

        // xử lý các trường hợp search
        if (searchItem) {
            // Nếu người dùng gõ một chuỗi bất kỳ mà không select từ gợi ý
            if (typeof searchItem === 'string') {
                const value = searchItem.trim();
                if (value) {
                    console.log("options", options);
                    const results = options.filter(item => {
                        const match = item.title.toLowerCase().indexOf(value.toLowerCase());
                        return match !== -1;
                    })
                    console.log("results", results);
                    if (results.length > 0) {
                        setIsMatch(true)
                        getSearchV3(results[0].title);
                        successNotify();
                    }
                }
            }

            // Nếu người dùng gõ một chuỗi và select từ gợi ý
            if (typeof searchItem === 'object') {
                const value = searchItem.title.trim();
                // nếu có searchItem thì mới gọi API
                if (value && options.length > 0) {
                    options.forEach(element => {
                        if (value.toLowerCase() == element.title.toLowerCase()) {
                            setIsMatch(true);
                            successNotify();
                            // Nếu từ khóa nhập vào trùng với một trong các dữ liệu trả về mới
                            // gọi action lưu kết quả lại vào trong redux
                            getSearchV3(value);
                        }
                    });
                }
            }
        }
        

    }

    // Show notify when search success
    const successNotify = () => {
        toast.success("Loading Success", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }

    useEffect(()=>{
        // Nếu trong DB ko có city thì trả về not found
        if (isMatch) {
            resetForm();
            
        } else {
            setIsShowErr(true);
        }
    },[isMatch, isSumimited])

    const resetForm = () => {
        setSearchItem('');
        setIsSumimited(false);
        setIsShowErr(false);
    }

    // Binding input khi gõ vào ô input
    const handleChange = (e) => {
        setSearchItem(e.target.value)
        getSearchV2Request(searchItem);
    }

    useEffect(()=> {
        // sau khi đã có data thì thực hiện lệnh chuyển trang 
        if (propsSearchV3.success == 1) {
            const menu1 = document.querySelector("button.btnJS1");
            menu1.click();
            history.push({
                pathname: "/main/current",
            })
        }
    }, [propsSearchV3]);

    


    // Khi có data search trả về, đẩy vào trong options 
    if (propsSearchV2.success == 1) {
        const searches = propsSearchV2.data.search;
        searches.forEach(element => {
            options.push({ title: element.name });
        });
    }

    return (
        <div className="container-fluid">
            <div className="row rowScssH1">
                <div className="col-1 offset-3">
                    <a href={linkHome} className="linkHomeHS"> 
                        <img src={logo} width="73" alt="Logo" />
                    </a>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-6 offset-4">
                            <div className="row">
                                <form id="searchFormHS" onSubmit={handleSearch}>
                                    <div className="input-group groupScssH1">
                                        <Autocomplete
                                            value={searchItem}
                                            onChange={(event, newValue) => {
                                                if (typeof newValue === 'string') {
                                                    setSearchItem({
                                                        title: newValue,
                                                    });
                                                } else if (newValue && newValue.inputValue) {
                                                    // Create a new value from the user input
                                                    setSearchItem({
                                                        title: newValue.inputValue,
                                                    });
                                                }
                                                else {
                                                    setSearchItem(newValue);
                                                }

                                            }}
                                            filterOptions={(options, params) => {
                                                const filtered = filter(options, params);
                                                // Suggest the creation of a new value
                                                if (params.inputValue !== '') {
                                                    filtered.push({
                                                        inputValue: params.inputValue,
                                                        title: `Add "${params.inputValue}"`,
                                                    });
                                                }
                                                return filtered;
                                            }}
                                            selectOnFocus
                                            clearOnBlur
                                            freeSolo
                                            handleHomeEndKeys
                                            id="inputSearch1"
                                            options={options}
                                            getOptionLabel={option => {
                                                if (typeof option === 'string') {
                                                    return option;
                                                }
                                                // Add "xxx" option created dynamically
                                                if (option.inputValue) {
                                                    return option.inputValue;
                                                }

                                                // Regular option
                                                return option.title;
                                            }}
                                            renderOption={(option) => {
                                                return (<>{option.title}</>);
                                            }}

                                            renderInput={(params) => (
                                                <>
                                                    <div className="input-group-prepend" ref={params.InputProps.ref} style={{ display: "flex" }}>
                                                        <button
                                                            className="input-group-text LborderR4"
                                                            type="submit"
                                                            onClick={handleSearch}
                                                        >
                                                            <i className="fa fa-search searchScssH1" aria-hidden="true"></i>
                                                        </button>
                                                        <input
                                                            {...params.inputProps}
                                                            id="inputSearchHS"
                                                            type="text"

                                                            placeholder="Tìm vị trí"
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                </>
                                            )}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    {!(isShowErr && isSumimited) ? null : (<i><small>Không tìm thấy thành phố</small></i>)}
                                    {!(isShowEmpty && isSumimited) ? null : (<i><small>Hãy nhập thông tin</small></i>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="groupScssH2">
                                <Login/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        propMenu: state.naviBarReducer,
        propsSearchV2: state.searchV2Reducer,
        propsSearchV3: state.searchV3Reducer,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSearchV2Request,
    getSearchV3,
},
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);