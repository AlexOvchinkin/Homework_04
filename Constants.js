import { Record } from 'immutable';

export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DAY_SELECTED = 'DAY_SELECTED';
export const DAY_RESET = 'DAY_RESET';
export const COMMENT_ADDED = 'COMMENT_ADDED';

export const record = new Record({
    id: '',
    text: '',
    user: ''
});

// localization date-picker
export const MONTH = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь",
    "Ноябрь", "Декабрь"];

export const WEEKDAYS_LONG = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

export const WEEKDAYS_SHORT = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];