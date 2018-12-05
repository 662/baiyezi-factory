import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

class MDatePicker extends React.Component {
    handleChange = value => {
        this.props.onChange(value.valueOf());
    };
    render() {
        const { value, style } = this.props;
        const newValue = value && (isNaN(value) ? moment(value) : moment(Number(value)));
        return <DatePicker style={style} value={newValue} onChange={this.handleChange} />;
    }
}

export default MDatePicker;
