import { DELETE_ARTICLE } from './Constants';
import { DAY_SELECTED } from './Constants';

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
};

export function daySelection(day) {
    return {
        type: DAY_SELECTED,
        payload: { day }
    }
}
