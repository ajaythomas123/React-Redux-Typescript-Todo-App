import React from 'react';
import ReactDOM from 'react-dom';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onAddClick() {
    this.props.onAddTodo(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Enter todo text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <span className="input-group-addon" onClick={this.onAddClick.bind(this)}>Add</span>
        </div>
      </div>
    )
  }
}
