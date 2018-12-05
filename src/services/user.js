import * as api from '../utils/api';
import { delay } from '../utils/tool';

export async function updateLogin(login) {
    // return api.PUT('/user/login', { login });

    return delay(300, { login });
}
export async function updatePassword(password) {
    // return api.PUT('/user/password', { password });
    return delay(300, {});
}
