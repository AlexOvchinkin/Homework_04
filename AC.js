import { DELETE_ARTICLE, DAY_SELECTED, DAY_RESET, COMMENT_ADDED } from './Constants';

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function daySelected(day) {
    return {
        type: DAY_SELECTED,
        payload: { day }
    }
}

export function dayReset() {
    return {
        type: DAY_RESET
    }
}

export function commentAdded(comment) {
    return {
        type: COMMENT_ADDED,
        payload: {
            id: comment.id,
            article: comment.article,
            user: comment.user,
            text: comment.text
        }
    }
}
