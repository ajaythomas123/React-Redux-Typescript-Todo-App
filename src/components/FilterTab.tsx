import * as React from 'react';
import { FilterTabProps } from '../types/index';

const FilterTab = (props: FilterTabProps) => {
  const _onFilterClick = (): void => {
    const { onFilterClick } = props;
    onFilterClick(props.filterName);
  }

  return (
    <li
      role="presentation"
      className={props.active ? 'active' : ''}>
      <a onClick={_onFilterClick}>{props.filterName}</a>
    </li>
  );
};


export default FilterTab;
