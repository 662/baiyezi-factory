import { Layout } from "antd";
import React, { PureComponent } from "react";
import styles from './styles.less';

const { Footer } = Layout;
export default class GFooter extends PureComponent {
    render() {
        return <Footer className={styles.footer}>baiyezi-factory ©2018 Created by 662.</Footer>;
    }
}
