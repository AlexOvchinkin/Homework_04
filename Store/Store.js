import {createStore} from 'redux';
import reducer from '../Reducers/MainReducer';

const initObj = {
    deletedArticles: [],
    range: {
        from: null,
        to: null
    }
};

let store = createStore(reducer, initObj);

export default store;
