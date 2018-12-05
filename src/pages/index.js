import React from 'react';
import Redirect from 'umi/redirect';

export default class extends React.Component {
    render() {
        return <Redirect to="/dashboard" />;
    }
}
