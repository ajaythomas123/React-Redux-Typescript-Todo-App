import * as React from 'react';
import { IFilter } from './IFilter';

interface FilterProps extends IFilter {
  onSetFilter: (filter: string) => void;
}

export default function FilterTab(props: FilterProps) {
  return (
    <ul className="nav nav-tabs">
        <li role="presentation" className={props.filter === 'All' ? 'active' : ''}><a onClick={props.onSetFilter.bind(null, 'All')}>All</a></li>
        <li role="presentation" className={props.filter == 'Pending' ? 'active' : ''}><a onClick={props.onSetFilter.bind(null, 'Pending')}>Pending</a></li>
        <li role="presentation" className={props.filter == 'Completed' ? 'active' : ''}><a onClick={props.onSetFilter.bind(null, 'Completed')}>Completed</a></li>
    </ul>
  );
}
