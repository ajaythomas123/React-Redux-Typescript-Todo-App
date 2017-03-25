import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TodoItem from './components/TodoItem';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
}
render(TodoItem);

if(module.hot) {
  module.hot.accept('./components/TodoItem', () => {
    render(TodoItem);
  });
}
