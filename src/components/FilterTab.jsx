import React, { PropTypes } from 'react';

const FilterTab = (props) => {
  const _onFilterClick = () => {
    const { onFilterClick } = props;
    onFilterClick(props.filterName);
  };

  return (
    <li
      role="presentation"
      className={props.active ? 'active' : ''}
    >
      <a onClick={_onFilterClick}>{props.filterName}</a>
    </li>
  );
};

FilterTab.propTypes = {
  active: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default FilterTab;
