import fp from 'lodash/fp';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const progressMiddleware = store => next => action => {
  const cond = fp.cond([
    [fp.equals(`pending`), () => store.dispatch(showLoading())],
    [fp.equals(`fulfilled`), () => store.dispatch(hideLoading())],
    [fp.equals(`rejected`), () => store.dispatch(hideLoading())],
  ]);
  const composer = fp.pipe(fp.get(`type`), fp.split(`/`), fp.last, fp.toLower, cond);
  composer(action);
  return next(action);
};

export default progressMiddleware;
