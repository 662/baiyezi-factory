import { Component } from 'react';
import moment from 'moment';

export default class FormPage extends Component {
    submit = (actionType, redirect, extendValues = {}) => {
        const { history, dispatch, form } = this.props;
        return new Promise(function(resolve, reject) {
            form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    dispatch({ type: actionType, payload: { ...values, ...extendValues } })
                        .then(_ => {
                            redirect && history.push(redirect);
                            resolve(_);
                        })
                        .catch(e => {
                            if (e.status === 422) {
                                e.detail.forEach(({ field, message }) =>
                                    form.setFields({ [field]: { value: values[field], errors: [new Error(message)] } })
                                );
                            } else {
                                reject(e);
                            }
                        });
                }
            });
        });
    };
}
