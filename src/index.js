import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import { createStore } from 'redux';
import AppReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}
render(App);

if(module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
