import {DELETE_ARTICLE} from '../Constants';

export default function selectionReducer( state, action) {

    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:

            let deletedArticles = state.deletedArticles.slice();
            deletedArticles.push(payload.id);

            return {
                deletedArticles: deletedArticles,
                range: {
                    from: state.from,
                    to: state.to
                }
            }
    }

    return state;
}
