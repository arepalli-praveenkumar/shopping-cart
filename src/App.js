import React from 'react';
import { Provider } from 'react-redux'
import RoutesComponents from "./routes/routes";
import store from "./redux/store";
import './App.css';

class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
      <div className="App">
        <RoutesComponents></RoutesComponents>
      </div>
      </Provider>
    );
  }
  
}

export default App;
