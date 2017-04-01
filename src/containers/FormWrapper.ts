import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo } from '../actions/index';
import AddForm from '../components/AddForm';

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onAddTodo: (text: string) => {
    dispatch(addTodo(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
