import React, { PropTypes } from 'react';
import FilterTab from './FilterTab';

const Filter = props => (
  <ul className="nav nav-tabs">
    {
      ['All', 'Pending', 'Completed'].map(filterName =>
        <FilterTab
          key={filterName}
          active={props.filter === filterName}
          filterName={filterName}
          onFilterClick={props.onSetFilter}
        />,
      )
    }
  </ul>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSetFilter: PropTypes.func.isRequired,
};

export default Filter;
