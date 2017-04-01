import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setFilter } from '../actions/index';
import FilterTab from '../components/FilterTab';
import { IState } from '../reducers/IState';

const mapStateToProps = (state: IState) => ({
  filter: state.filter
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onSetFilter: (text: string) => {
    dispatch(setFilter(text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTab);
