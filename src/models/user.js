import modelExtend from 'dva-model-extend';
import { basicModel } from './common';

import * as pop from '@src/utils/pop';
import * as api from '@src/services/user';
import * as storage from '@src/utils/session-storage';

const user = modelExtend(basicModel, {
    namespace: 'user',
    effects: {
        *updateLogin({ payload }, { call, put }) {
            yield call(api.updateLogin, payload.login);
            yield put({ type: 'session/setState', login: payload.login });
            yield call(storage.updateSession, { login: payload.login });
            pop.success('修改成功');
        },
        *updatePassword({ payload }, { call, put }) {
            yield call(api.updatePassword, payload.password);
            pop.success('修改成功');
        },
    },
});

export default user;
