import articlesReducer from './ArticlesReducer';
import datapickerReducer from './DatapickerReducer';

export default function (state, action) {
    return {
        deletedArticles: articlesReducer(state.deletedArticles, action),
        range: datapickerReducer(state.range, action)
    }
}
