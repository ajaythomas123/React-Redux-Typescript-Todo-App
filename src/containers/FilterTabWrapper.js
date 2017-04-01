import { connect } from 'react-redux';
import { setFilter } from '../actions/index';
import FilterTab from '../components/FilterTab';

const mapStateToProps = (state) => ({
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  onSetFilter: (text) => {
    dispatch(setFilter(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTab);
