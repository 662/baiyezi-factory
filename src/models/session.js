import modelExtend from 'dva-model-extend';
import { basicModel } from './common';
import router from 'umi/router';

import * as pop from '@src/utils/pop';
import * as storage from '@src/utils/session-storage';
import * as api from '@src/services/session';

const session = modelExtend(basicModel, {
    namespace: 'session',
    state: storage.getSession() || {
        login: '',
        token: '',
    },
    effects: {
        *signin({ payload }, { call, put }) {
            const { login, password } = payload;
            const { token } = yield call(api.create, { login, password });
            yield put({ type: 'setState', payload: { login, token } });
            yield call(storage.setSession, { login, token });
        },
        *signout(_, { call, put, take }) {
            yield put({ type: 'clear' });
            yield take('clear/@@end');
            pop.success('已安全退出系统');
        },
        *clear(_, { call, put }) {
            yield put({ type: 'setState', payload: { token: '', login: '' } });
            yield call(storage.removeSession);
            yield call(router.push, '/signin');
        },
    },
});

export default session;
