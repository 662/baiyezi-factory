import React from 'react';
import { Divider, Popconfirm } from 'antd';
import Link from 'umi/link';

const ListAction = ({ updateURL, onDelete }) => (
    <React.Fragment>
        <Link to={updateURL}>修改</Link>
        <Divider type="vertical" />
        <Popconfirm title="确定要删除这条数据?" onConfirm={onDelete} okText="是" cancelText="否">
            <a>删除</a>
        </Popconfirm>
    </React.Fragment>
);

export default ListAction;
