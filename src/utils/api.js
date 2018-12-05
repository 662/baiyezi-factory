import request from '../utils/request';
import config from './config';
import { getToken } from './session-storage';

const fetch = async (path, options = {}) => {
    const Authorization = getToken();
    options.headers = {
        ...options.headers,
        Authorization: 'Bearer ' + Authorization,
    };
    return request(config.apiPrefix + path, options);
};

const GET = path => {
    return fetch(path);
};

const POST = (path, data) => {
    return fetch(path, {
        method: 'POST',
        body: data,
    });
};

const PUT = (path, data) => {
    return fetch(path, {
        method: 'PUT',
        body: data,
    });
};

const DELETE = path => {
    return fetch(path, {
        method: 'DELETE',
    });
};

export { fetch, GET, POST, PUT, DELETE };
