import * as React from 'react';
import FormWrapper from '../containers/FormWrapper';
import FilterWrapper from '../containers/FilterWrapper';
import TodoListWrapper from '../containers/TodoListWrapper';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="row">
          <FormWrapper />
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-md-12">
            <FilterWrapper />
            <TodoListWrapper />
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);

export default App;
