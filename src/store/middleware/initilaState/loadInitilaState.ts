import {isSignIn} from '@utils/helper';
import {Middleware} from 'redux';

const loadInitialState: Middleware = api => next => async action => {
  const {dispatch} = api;
console.log("action", action.type)
  if (action.type === '@@INIT') {
    try {
      const signIed = await isSignIn();
      dispatch({type: 'user/setInit', payload: signIed});
    } catch {
      dispatch({type: 'user/setInit', payload: false});
    }
  }

  return next(action);
};

export default loadInitialState;
