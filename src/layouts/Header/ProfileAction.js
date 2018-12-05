import React, { Component } from 'react';
import { connect } from 'dva';
import { Dropdown, Icon } from 'antd';
import classnames from 'classnames';
import ProfileMenu from './ProfileMenu';
import styles from '../styles.less';

class ProfileAction extends Component {
    render() {
        const { session, dispatch } = this.props;
        const { login } = session;
        return (
            <Dropdown overlay={<ProfileMenu dispatch={dispatch} />}>
                <span className={classnames(styles.action, styles.account)}>
                    <Icon type="user" />
                    <span className="name">{login}</span>
                </span>
            </Dropdown>
        );
    }
}

export default connect(({ session }) => ({ session }))(ProfileAction);
