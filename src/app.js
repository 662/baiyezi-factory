import { ApiAuthError, ApiError } from './utils/errors';
import * as pop from './utils/pop';

export const dva = {
    config: {
        onError(e, dispatch) {
            if (e.status !== 422) {
                e.preventDefault();
            }
            if (e instanceof ApiError) {
                if (e instanceof ApiAuthError) {
                    pop.error(e.message, 3);
                    dispatch({ type: 'session/clear' });
                } else {
                    pop.error(e.message);
                }
            } else {
                console.error(e);
            }
        },
        // onReducer(reducer) {
        //     return (state, action) => {
        //         const newState = reducer(state, action);
        //         if (action.type.indexOf('session/signout') !== -1) {
        //             return {
        //                 routing: newState.routing,
        //                 loading: newState.loading,
        //             };
        //         } else {
        //             return newState;
        //         }
        //     };
        // },
    },
};
