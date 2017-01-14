import { DELETE_ARTICLE, DAY_SELECTED, DAY_RESET } from './Constants';

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
