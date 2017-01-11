import {DELETE_ARTICLE} from '../Constants';
import {DAY_SELECTED} from '../Constants';
import {DateUtils} from 'react-day-picker';
import {articles} from '../src/fixtures';

export default function (state, action) {

    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return state.articles.filter(item => item.id !== payload.id);

        case DAY_SELECTED:

            const range = DateUtils.addDayToRange(payload.day, state.selection.range);

            return articles.filter(item => {
                    const date = new Date(Date.parse(item.date));
                    return date >= range.from
                        && (range.to ? date <= range.to : true)
                        && ( state.selection.deletedArticles.indexOf(item.id) == -1 );
                }
            );
    }

    return state.articles;
}