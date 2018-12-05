import React from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import withRouter from 'umi/withRouter';

import BasicLayout from './BasicLayout';
import BlankLayout from './BlankLayout';
import noLayoutRoutes from '../common/no-layout-routes';
import noSessionRoutes from '../common/no-session-routes';

const Layout = ({ children, location, session }) => {
    const pathInNoLayout = noLayoutRoutes.some(r => location.pathname.indexOf(r) === 0);
    const pathInNoSession = noSessionRoutes.some(r => location.pathname.indexOf(r) === 0);
    const isSignin = session && session.token;
    const pathAndSearch = encodeURIComponent(location.pathname + location.search);
    const Layout = pathInNoLayout ? BlankLayout : BasicLayout;

    // 需要登录 却 没有登录
    if (!pathInNoSession && !isSignin) {
        return <Redirect to={{ pathname: '/signin', search: `?from=${pathAndSearch}` }} />;
    }

    return (
        <LocaleProvider locale={zhCN}>
            <Layout>{children}</Layout>
        </LocaleProvider>
    );
};
export default withRouter(connect(({ session }) => ({ session }))(Layout));
