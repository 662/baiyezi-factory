import React from 'react';
import { connect } from 'dva';
import { Modal, Form, Input } from 'antd';
import FormPage from '@src/components/FormPage';

const FormItem = Form.Item;

class LoginModal extends FormPage {
    handleOk = e => {
        e.preventDefault();
        this.submit('user/updateLogin').then(_ => this.props.handleCancel());
    };
    render() {
        const { form, visible, handleCancel } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal width="320px" title="修改账号" visible={visible} onOk={this.handleOk} onCancel={handleCancel}>
                <Form onSubmit={this.handleOk}>
                    <FormItem label="新账号">
                        {getFieldDecorator('login', {
                            rules: [{ required: true, message: '请输入新账号' }, { max: 10, message: '账号太长' }],
                        })(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

export default connect()(Form.create()(LoginModal));
