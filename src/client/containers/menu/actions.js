import {baseUrl} from './../../constants';
import * as Constants from './constants';

export const fetchRoles = () => (dispatch) => {
    dispatch(rolesLoading(true));

    return fetch(baseUrl + 'roles/getList')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(roles => dispatch(addRoles(roles)))
    .catch(error => dispatch(rolesFailed(error.message)));
}

export const rolesLoading = () => ({
    type: Constants.ROLES_LOADING
});

export const rolesFailed = (errmess) => ({
    type: Constants.ROLES_FAILED,
    payload: errmess
});

export const addRoles = (roles) => ({
    type: Constants.ADD_ROLES,
    payload: roles
});