import {COMMENT_ADDED, record} from '../Constants';

export default function (state, action) {

    const {type, payload} = action;

    switch (type) {
        case COMMENT_ADDED:
            //нет, нельзя мутировать стейт! тем более чужого редюсера
            payload.article.comments.push(payload.id);

            return state.set(payload.id, new record({
                id: payload.id,
                user: payload.user,
                text: payload.text
            }));
    }

    return state;
}
