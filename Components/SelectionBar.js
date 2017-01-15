import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import {MONTH, WEEKDAYS_LONG, WEEKDAYS_SHORT} from '../Constants';
import {daySelected, dayReset} from '../AC';
import {connect} from 'react-redux';
import Select from 'react-select';

import 'react-day-picker/lib/style.css';


class SelectionBar extends React.Component {

    render() {

        const {from, to} = this.props;

        return (
            <aside className="selection_bar">

                <DayPicker
                    initialMonth={ new Date(2016, 5) }
                    months={ MONTH }
                    weekdaysLong={ WEEKDAYS_LONG }
                    weekdaysShort={ WEEKDAYS_SHORT }
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) }
                    onDayClick={ this.handleDayClick }
                />

                <a href="#" onClick={ this.handleOnResetClick }>reset</a>

            </aside>
        );
    };

    handleDayClick = (ev, day) => {
        this.props.daySelected(day);
    };

    handleOnResetClick = (ev) => {
        ev.preventDefault();
        this.props.dayReset();
    };
}

export default connect(state => state.range, {daySelected, dayReset})(SelectionBar);