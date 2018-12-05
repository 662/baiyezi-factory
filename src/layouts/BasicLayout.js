import React, { Component } from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';
import styles from './styles.less';

const { Content } = Layout;
class BasicLayout extends Component {
    state = { collapsed: false };

    componentDidMount() {}

    toggle = () => this.setState({ collapsed: !this.state.collapsed });

    render() {
        const { collapsed } = this.state;
        const { children } = this.props;
        return (
            <Layout className={styles.root}>
                <Sider collapsed={collapsed} />
                <Layout>
                    <Header collapsed={collapsed} toggle={this.toggle} />
                    <Content className={styles.content}>{children}</Content>
                    <Footer />
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;
