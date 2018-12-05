import { Component } from 'react';
import qs from 'qs';

export default class ListPage extends Component {
    handleSearch = e => {
        e.preventDefault();
        const { history, form } = this.props;
        const params = form.getFieldsValue();
        Object.keys(params).forEach(k => {
            // if (moment.isMoment(params[k])) {
            //     params[k] = params[k].valueOf();
            // }
            if (k === 'dateRange') {
                params.start = params[k][0];
                params.end = params[k][1];
                delete params[k];
            }
        });
        history.push(`?${qs.stringify(params)}`);
    };
    handlePaginationChange = (page, pageSize) => {
        const { history, location } = this.props;
        const pagerParams = { page, size: pageSize };
        const oldParams = qs.parse(location.search, { ignoreQueryPrefix: true });
        const params = { ...oldParams, ...pagerParams };
        const queryString = qs.stringify(params);
        history.push(`?${queryString}`);
    };
}
