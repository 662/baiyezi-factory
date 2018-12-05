import * as api from '../utils/api';
import { delay } from '../utils/tool';

// 登录
export function create({ login, password }) {
    // return api.POST('/sessions', { login, password });
    return delay(300, {
        token: 'egtoken',
    });
}
