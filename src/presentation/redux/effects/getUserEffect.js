import { getDataUser } from "../../../data/api/apiRequest";
import getUserAction from "../actions/getUserAction";


export const getUserRequest = fbId => {
    return (dispatch) => {
        
        getDataUser(fbId).then(resolve => {
            console.log(resolve);
            debugger
            dispatch(getUserAction.getUserSuccess(resolve)); 
        }).catch(err => {
            dispatch(getUserAction.getUserFail(err));
        })
    }
}

