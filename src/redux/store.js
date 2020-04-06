import { createStore, applyMiddleware, compose} from "redux";
import  thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

//     const enhancer = composeEnhancers(
//         applyMiddleware(...thunk),
//         // other store enhancers if any
//       );
//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducer, composeEnhancers);
//const store = createStore(rootReducer, applyMiddleware(thunk));
//const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));


export default store;