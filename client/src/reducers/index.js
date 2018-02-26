import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import listsReducer from './listsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    lists: listsReducer
});

const store = createStore(rootReducer);
export default rootReducer;