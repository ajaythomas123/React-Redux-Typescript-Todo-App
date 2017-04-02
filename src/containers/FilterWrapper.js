import { connect } from 'react-redux';
import { setFilter } from '../actions/index';
import Filter from '../components/Filter';

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onSetFilter: (text) => {
    dispatch(setFilter(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
