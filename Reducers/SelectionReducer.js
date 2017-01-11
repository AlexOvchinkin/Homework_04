import {DELETE_ARTICLE} from '../Constants';
import {DAY_SELECTED} from '../Constants';
import {DateUtils} from 'react-day-picker';

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
            };

        case DAY_SELECTED:
            return {
                deletedArticles: state.deletedArticles,
                range: DateUtils.addDayToRange(payload.day, state.range)
            };
    }

    return state;
}
