import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilter } from '../actions/index';
import Filter from '../components/Filter';
import { AppState } from '../types/index';

const mapStateToProps = (state: AppState) => ({
  filter: state.filter
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSetFilter: (text: string) => {
    dispatch(setFilter(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
