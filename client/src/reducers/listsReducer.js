import {CREATE_LIST} from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case CREATE_LIST:
            return action.payload || false;
        default:
            return state;
    }
}