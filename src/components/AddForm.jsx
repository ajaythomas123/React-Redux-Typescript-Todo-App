import React, { PropTypes } from 'react';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this._onAddClick = this._onAddClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _onAddClick() {
    if (this.state.value !== '') {
      this.props.onAddTodo(this.state.value);
      this.setState({ value: '' });
    }
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="input-group">
          <input
            className="form-control"
            type="text" placeholder="Enter todo text"
            value={this.state.value}
            onChange={this._handleChange}
          />
          <span
            className="btn input-group-addon"
            style={{ textDecoration: 'none' }}
            onClick={this._onAddClick}
          >
            Add
          </span>
        </div>
      </div>
    );
  }
}

AddForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
