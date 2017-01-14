import { DAY_SELECTED, DAY_RESET } from '../Constants';
import { DateUtils } from 'react-day-picker';

export default function (state, action) {

    const {type, payload} = action;

    switch (type) {
        case DAY_SELECTED:
            return DateUtils.addDayToRange( payload.day, state);

        case DAY_RESET:
            return {
                from: null,
                to: null
            }
    }

    return state;
}
