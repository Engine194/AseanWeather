import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "../scss/homePage.scss";

const options = ['Option 1', 'Option 2'];

const SearchInput = () => {
    return (
        <Autocomplete
            id="custom-input"
            options={options}
            renderInput={(params) => (
                <div className="row" ref={params.InputProps.ref}>
                    <input type="text" {...params.inputProps} />
                </div>
            )}
        />
    );
}

export default SearchInput;