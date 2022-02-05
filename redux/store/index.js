import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';


const initialstate = {}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

export const store = createStore(reducers, enhancer);


store.subscribe(() => console.log(store.getState()));