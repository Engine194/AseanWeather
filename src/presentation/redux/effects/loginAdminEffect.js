import { loginApi } from "../../../data/api/apiRequest"
import loginAdminAction from "../actions/loginAdminAction";

export const getLoginAdminRequest = (email, password) => {
    return (dispatch) => {
        loginApi(email,password).then(resolve => {
            console.log(resolve,"ewewewewqeqw");
            dispatch(loginAdminAction.getLoginAdminSuccess(resolve));
        }).catch(err => {
            dispatch(loginAdminAction.getLoginAdminFail(err));
        })
    }
}

