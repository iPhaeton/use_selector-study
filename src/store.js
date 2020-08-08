import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import goods from './reducers';

const reducer = combineReducers({
    goods,
})

const configureStore = () => {
    const store = createStore(reducer, composeWithDevTools());
    return store;
};

export default configureStore();