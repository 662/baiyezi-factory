import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import LoginModal from './LoginModal';
import PasswordModal from './PasswordModal';

class ProfileMenu extends Component {
    state = {
        loginVisible: false,
        passwordVisible: false,
    };
    onMenuClick = e => {
        switch (e.key) {
            case 'logout':
                this.props.dispatch({ type: 'session/signout' });
                break;
            case 'login':
                this.setState({ loginVisible: true });
                break;
            case 'password':
            this.setState({ passwordVisible: true });
                break;
            default:
                break;
        }
    };
    handleLoginCancel = e => this.setState({ loginVisible: false });
    handlePasswordCancel = e => this.setState({ passwordVisible: false });
    render() {
        return (
            <React.Fragment>
                <Menu selectedKeys={[]} onClick={this.onMenuClick}>
                    <Menu.Item key="login">
                        <Icon type="user" />
                        修改账号
                    </Menu.Item>
                    <Menu.Item key="password">
                        <Icon type="key" />
                        修改密码
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="logout">
                        <Icon type="logout" />
                        退出登录
                    </Menu.Item>
                </Menu>
                <LoginModal visible={this.state.loginVisible} handleCancel={this.handleLoginCancel} />
                <PasswordModal visible={this.state.passwordVisible} handleCancel={this.handlePasswordCancel} />
            </React.Fragment>
        );
    }
}

export default ProfileMenu;
