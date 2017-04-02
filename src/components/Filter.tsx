import * as React from 'react';
import { FilterProps } from '../types/index';
import FilterTab from './FilterTab';

const Filter = (props: FilterProps) => (
  <ul className="nav nav-tabs">
    {
      ['All', 'Pending', 'Completed'].map(filterName =>
        <FilterTab
          key={filterName}
          active={props.filter === filterName}
          filterName={filterName}
          onFilterClick={props.onSetFilter}
        />
      )
    }
  </ul>
);

export default Filter;
