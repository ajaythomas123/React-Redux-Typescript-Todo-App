import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import AddForm from '../components/AddForm';

const mapStateToProps = _=>_;

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (text) => {
    dispatch(addTodo(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
