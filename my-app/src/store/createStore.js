import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga  from '../saga';

export default function configureStore(preloadedState) {
  // 创建saga中间件
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  // 创建存储容器
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  return store;
}