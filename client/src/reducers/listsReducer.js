import {CREATE_LIST, FETCH_LISTS, FETCH_LIST, FETCH_USER_LISTS, DELETE_LIST} from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case CREATE_LIST:
            return action.payload || false;
        case FETCH_LISTS:
            return action.payload || false;
        case FETCH_LIST:
            return action.payload || false;
        case FETCH_USER_LISTS:
            return action.payload || false;
        case DELETE_LIST:
            return action.payload || false;
        default:
            return state;
    }
}