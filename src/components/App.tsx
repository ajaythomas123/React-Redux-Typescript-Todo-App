import * as React from 'react';
import FormWrapper from '../containers/FormWrapper';
import TodoListWrapper from '../containers/TodoListWrapper'

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="row">
          <FormWrapper />
        </div>
        <div className="row" style={{marginTop: '10px'}}>
          <TodoListWrapper />
        </div>
      </div>
      <div className="col-md-4"></div>
      </div>
    </div>
  );
}
