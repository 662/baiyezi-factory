import modelExtend from 'dva-model-extend';

const basicModel = {
    reducers: {
        setState(state, { type, payload }) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key];
            });
        },
    },
};

const detailPageModel = {
    state: { detail: {} },
    reducers: {
        setDetail(state, { type, payload }) {
            Object.keys(payload).forEach(key => {
                state.detail[key] = payload[key];
            });
        },
    },
};

const listPageModel = modelExtend(basicModel, {
    state: {
        list: [],
        pagination: {
            pageSizeOptions: ['10', '20', '50', '100'],
            showSizeChanger: true,
            showQuickJumper: false,
            current: 1,
            total: 0,
            pageSize: 10,
        },
    },

    reducers: {
        setList(state, { list, pagination }) {
            state.list = list;
            state.pagination = {
                ...state.pagination,
                ...pagination,
            };
        },
    },
});

export { basicModel, detailPageModel, listPageModel };
