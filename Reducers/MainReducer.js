import articlesReducer from './ArticlesReducer';
import selectionReducer from './SelectionReducer';

export default function (state, action) {
    return {
        articles: articlesReducer(
            {
                articles: state.articles,
                selection: state.selection
            },
            action),
        selection: selectionReducer(state.selection, action)
    }
}
