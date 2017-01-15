import articlesReducer from './ArticlesReducer';
import datapickerReducer from './DatapickerReducer';
import commentsReducer from './CommentsReducer';

export default function (state, action) {
    return {
        deletedArticles: articlesReducer(state.deletedArticles, action),
        range: datapickerReducer(state.range, action),
        comments: commentsReducer(state.comments, action)
    }
}
