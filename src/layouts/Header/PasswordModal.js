import React from 'react';
import { connect } from 'dva';
import { Modal, Form, Input } from 'antd';
import FormPage from '@src/components/FormPage';

const FormItem = Form.Item;

class PasswordModal extends FormPage {
    handleOk = e => {
        e.preventDefault();
        this.submit('user/updatePassword').then(_ => this.props.handleCancel());
    };
    render() {
        const { form, visible, handleCancel } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal width="320px" title="修改密码" visible={visible} onOk={this.handleOk} onCancel={handleCancel}>
                <Form onSubmit={this.handleOk}>
                    <FormItem label="新密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入新密码' }, { max: 16, message: '密码太长' }],
                        })(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

export default connect()(Form.create()(PasswordModal));
