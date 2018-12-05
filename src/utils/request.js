import fetch from 'isomorphic-fetch';
import config from './config';
import { ApiServerError, ApiAuthError, ApiJsonError, ApiBusinessError, ApiTimeoutError } from './errors';

async function parseJSON(response) {
    try {
        const json = response.json();
        json._SERVER_URL = response.url;
        return json;
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new ApiJsonError(response.url);
        } else {
            throw error;
        }
    }
}

async function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let message = '';
        try {
            const r = await response.json();
            message = r.error || r.message;
        } catch (error) {
            message = response.statusText;
        }
        if (response.status === 401) {
            throw new ApiAuthError(response.url);
        } else if (response.status >= 400 && response.status < 500) {
            throw new ApiBusinessError(message, response.url, response.status, response);
        } else if (response.status >= 500) {
            throw new ApiServerError(message, response.url);
        }
    }
}

export default function request(path, options) {
    let url = path;
    const defaultOptions = {
        method: 'GET',
        // credentials: "include"
    };

    const newOptions = { ...defaultOptions, ...options };
    if (newOptions.method === 'GET') {
        // 增加时间戳 避免缓存 仅 GET
        const timestamp = new Date().getTime();
        url += url.indexOf('?') === -1 ? `?_=${timestamp}` : `&_=${timestamp}`;
    } else if (!(newOptions.body instanceof FormData)) {
        newOptions.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            ...newOptions.headers,
        };
        newOptions.body = JSON.stringify(newOptions.body);
    }

    const timeout = newOptions.timeout || config.fetchTimeout || 5000;

    return Promise.race([
        fetch(url, newOptions)
            .then(checkStatus)
            .then(parseJSON)
            .catch(err => {
                throw err;
            }),
        new Promise(function(resolve, reject) {
            setTimeout(reject, timeout, new ApiTimeoutError(timeout, url));
        }),
    ]);
}
