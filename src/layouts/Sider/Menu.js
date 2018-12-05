import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { menuData } from '@src/common/menu';

const { SubMenu } = Menu;

class SiderManu extends Component {
    constructor(props) {
        super(props);
        const { pathname } = this.props.location;
        const pathnameArr = pathname.split('/');
        this.state = {
            defaultSelectedKeys: pathnameArr.slice(-1),
            defaultOpenKeys: pathnameArr.slice(0, -1),
        };
    }

    renderMenu = (menu, prePath = '') => {
        const { children, icon, name, path } = menu;
        const fullPath = prePath + '/' + path;

        const menuText = (
            <React.Fragment>
                {icon && <Icon type={icon} />}
                <span>{name}</span>
            </React.Fragment>
        );

        return children && children.length > 0 ? (
            <SubMenu title={menuText} key={path}>
                {children.map(item => this.renderMenu(item, fullPath))}
            </SubMenu>
        ) : (
            <Menu.Item key={path}>
                <Link to={fullPath}>{menuText}</Link>
            </Menu.Item>
        );
    };

    render() {
        const { defaultSelectedKeys, defaultOpenKeys } = this.state;
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys} defaultOpenKeys={defaultOpenKeys}>
                {menuData.map(item => this.renderMenu(item))}
            </Menu>
        );
    }
}
export default withRouter(SiderManu);
