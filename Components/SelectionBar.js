import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';
import { daySelection } from '../AC';

class SelectionBar extends React.Component {

    render() {
        return (
            <aside className="selection_bar">
                <div className="selection"></div>

                    <DayPicker
                        initialMonth={ new Date(2016, 5) }
                        onDayClick={ this.handleDayClick }
                    />
            </aside>
        );
    };

    handleDayClick = (ev, day) => {
        this.props.daySelection(day);
    };
}

export default connect(null, { daySelection })(SelectionBar);

