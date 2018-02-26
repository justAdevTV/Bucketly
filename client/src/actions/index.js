import axios from 'axios';
import { FETCH_USER, CREATE_LIST, FETCH_LIST, FETCH_LISTS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const createList = (values, callback) => async dispatch => {
    const res = await axios.post('/api/createList', values);

    dispatch({
        type: CREATE_LIST,
        payload: res.data
    });
}

export const fetchLists = () => async dispatch => {
    const request = await axios.get('api/lists');

    dispatch ({
        type: FETCH_LISTS,
        payload: request
    });
}

export const fetchList = (id) => async dispatch => {
    const request = await axios.get(`/api/lists/${id}`);

    dispatch ({
        type: FETCH_LIST,
        payload: request
    });
}