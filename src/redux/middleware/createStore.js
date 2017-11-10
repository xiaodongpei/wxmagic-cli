import { createStore, applyMiddleware, compose } from 'redux';

/**
 * 创建store
 * @param rootReducer
 * @param rootSaga // 代继承
 * @returns {*}
 */
export default function (rootReducer) {
  const middleware = [];
  const enhancers = [];

  // 合并中间件
  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  return store;
}
