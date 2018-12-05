import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Layout, Icon, Tooltip } from 'antd';
import ProfileAction from './ProfileAction';
import styles from '../styles.less';

class Header extends Component {
    render() {
        const { collapsed, toggle } = this.props;
        return (
            <Layout.Header className={styles.header}>
                <div className={styles.left}>
                    <span onClick={toggle} className={styles.action}>
                        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </span>
                </div>
                <div className={styles.right}>
                    <ProfileAction />
                </div>
            </Layout.Header>
        );
    }
}

export default withRouter(Header);
