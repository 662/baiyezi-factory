import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const RangePicker = DatePicker.RangePicker;

class MRangePicker extends React.Component {
    handleChange = value => {
        const newValue = [value[0] && value[0].startOf('day').valueOf(), value[1] && value[1].endOf('day').valueOf()];
        this.props.onChange(newValue);
    };
    render() {
        const { value, style } = this.props;
        const newValue = value[0] && value[1] && [moment(Number(value[0])), moment(Number(value[1]))];
        return (
            <RangePicker
                style={style}
                value={newValue}
                onChange={this.handleChange}
                ranges={{
                    今天: [moment().startOf('day'), moment().endOf('day')],
                    昨天: [
                        moment()
                            .subtract(1, 'days')
                            .startOf('day'),
                        moment()
                            .subtract(1, 'days')
                            .endOf('day'),
                    ],
                    当月: [moment().startOf('month'), moment().endOf('month')],
                    上月: [
                        moment()
                            .subtract(1, 'months')
                            .startOf('month'),
                        moment()
                            .subtract(1, 'months')
                            .endOf('month'),
                    ],
                }}
            />
        );
    }
}

export default MRangePicker;
