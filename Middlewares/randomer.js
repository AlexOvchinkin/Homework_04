import { COMMENT_ADDED } from '../Constants';

export default store => next => action => {

    const { type } = action;
    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
    switch (type) {
        case COMMENT_ADDED:
            action.payload.id = (( min, max ) => Math.random() * (max - min) + min)(1, 100000);
    }

    next(action);
}
