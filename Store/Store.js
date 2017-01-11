import {createStore} from 'redux';
import reducer from '../Reducers/MainReducer';
import {articles} from '../src/fixtures';

const initObj = {
    articles: articles,
    selection: {
        deletedArticles: [],
        range: {
            from: null,
            to: null
        }
    }
};

let store = createStore(reducer, initObj);

export default store;
