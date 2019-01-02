import * as Constants from './constants';

export const Roles = (state = { isLoading: true,
    errMess: null,
    roles:[]}, action) => {
    switch (action.type) {
        case Constants.ADD_ROLES:
            return {...state, isLoading: false, errMess: null, roles: action.payload};

        case Constants.ROLES_FAILED:
            return {...state, isLoading: true, errMess: null, roles: []}

        case Constants.ROLES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};