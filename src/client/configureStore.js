import {createStore, combineReducers, applyMiddleware } from 'redux';


import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { toggleNav } from './containers/header/reducer';
import { Roles } from './containers/menu/reducer';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            toggleNav: toggleNav,
            roles: Roles,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}