import { createStore, applyMiddleware, compose} from "redux";
import  thunk from "redux-thunk";
import rootReducer from "./rootReducer";  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(rootReducer, composeEnhancers);

export default store;