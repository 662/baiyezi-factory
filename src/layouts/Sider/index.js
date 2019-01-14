import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Menu from './Menu';
import logo from '@src/assets/logo_white.png';
import styles from '../styles.less';

export default class GSider extends PureComponent {
    render() {
        const { collapsed } = this.props;
        return (
            <Layout.Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed} width="240">
                <div className={classnames(styles.logo, { [`${styles.collapsed}`]: collapsed })}>
                    <Link to="/">
                        <img alt="Workaholic" src={logo} />
                        <h1>白叶子</h1>
                    </Link>
                </div>
                <Menu />
            </Layout.Sider>
        );
    }
}
