export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => next => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, client);
    }
    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });
    const actionPromise = promise(client);
    actionPromise.then(
        result => next({ ...rest, result, type: SUCCESS }),
        (error) => {
          next({ ...rest, error, type: FAILURE });
          return Promise.reject(error);
        },
      ).catch((error) => {
        next({ ...rest, error, type: FAILURE });
        return Promise.reject(error);
      });
    return actionPromise;
  };
}