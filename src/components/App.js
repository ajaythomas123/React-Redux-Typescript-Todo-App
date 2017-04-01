import React from 'react';
import FormWrapper from '../containers/FormWrapper';
import FilterTabWrapper from '../containers/FilterTabWrapper';
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
          <div className="row" style={{ marginTop: '10px' }}>
            <div className="col-md-12">
              <FilterTabWrapper />
              <TodoListWrapper />
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
