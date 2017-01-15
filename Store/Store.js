import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducers/MainReducer';
import { normalizedComments } from '../src/fixtures';
import { OrderedMap } from 'immutable';
import { record } from '../Constants';
import randomer from '../Middlewares/randomer';

function getCommentsMap( array, recordModel) {
    return array.reduce( (result, item) => {
        return result.set( item.id, new recordModel({
            id: item.id,
            text: item.text,
            user: item.user
        }) );
    }, new OrderedMap({}) );
}

const initObj = {
    deletedArticles: [],
    range: {
        from: null,
        to: null
    },
    comments: getCommentsMap(normalizedComments, record)
};

const enchancer = applyMiddleware(randomer);

let store = createStore(reducer, initObj, enchancer);

export default store;
