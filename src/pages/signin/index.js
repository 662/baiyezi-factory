import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Icon } from 'antd';
import qs from 'qs';

import FormPage from '@src/components/FormPage';

import styles from './index.css';

class Signin extends FormPage {
    handleFormSubmit = e => {
        e.preventDefault();
        const params = qs.parse(location.search, { ignoreQueryPrefix: true });
        const from = params.from || '/';
        this.submit('session/signin', from);
    };

    render() {
        const { form, loading } = this.props;
        const { getFieldDecorator } = form;
        const __DEV__ = process.env.NODE_ENV === 'development';

        return (
            <div className={styles.signin}>
                <div className={styles.form}>
                    <h1>baiyezi-factory</h1>
                    <p>基于umi,dva,antd的项目骨架</p>
                    <Form layout="inline" onSubmit={this.handleFormSubmit}>
                        <Form.Item>
                            {getFieldDecorator('login', {
                                initialValue: __DEV__ ? 'admin' : '',
                                rules: [{ required: true, message: '请输入账号' }],
                            })(<Input prefix={<Icon type="user" />} placeholder="账号" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                initialValue: __DEV__ ? '123456' : '',
                                rules: [{ required: true, message: '请输入密码' }],
                            })(<Input type="password" prefix={<Icon type="lock" />} placeholder="密码" />)}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                icon="enter"
                                size="default"
                                type="primary"
                                htmlType="submit"
                                loading={loading.effects['session/signin']}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const WrappedSignin = Form.create()(Signin);

export default connect(({ loading }) => ({ loading }))(WrappedSignin);
