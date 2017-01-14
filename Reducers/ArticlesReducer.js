import { DELETE_ARTICLE } from '../Constants';

export default function (state, action) {

    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
            let articlesIDs = state;
            articlesIDs.push(payload.id);
            return articlesIDs;
    }

    return state;
}