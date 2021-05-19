import { getUserActionType } from "../actionTypes/getUserActionType";

const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case getUserActionType.GET_USER_SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.payload))
            debugger

            return {
                ...state,
                loading: false,
                loaded: true,
                success: 1,
                data: {
                    user: action.payload,
                }
            }
        case getUserActionType.GET_USER_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                success: 0,
                error: action.error,
            }
        default:
            return state;
    }
}

export default userReducer;