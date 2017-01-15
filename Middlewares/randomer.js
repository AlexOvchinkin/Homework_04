import { COMMENT_ADDED } from '../Constants';

export default store => next => action => {

    const { type } = action;

    switch (type) {
        case COMMENT_ADDED:
            action.payload.id = (( min, max ) => Math.random() * (max - min) + min)(1, 100000);
    }

    next(action);
}
