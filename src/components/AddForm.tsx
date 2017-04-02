import * as React from 'react';

interface AddFormProps {
  onAddTodo: (value: string) => void;
};

interface AddFormState {
  value: string;
};


export default class AddForm extends React.Component<AddFormProps, AddFormState> {
  constructor(props: AddFormProps) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick() {
    if (this.state.value !== '') {
      this.props.onAddTodo(this.state.value);
      this.setState({ value: '' });
    }
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter todo text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span className="input-group-addon" onClick={this.onAddClick}>
            Add
          </span>
        </div>
      </div>
    );
  }
}
