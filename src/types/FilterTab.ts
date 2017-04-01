export interface FilterTab {
  active: boolean;
  filterName: string;
};

export interface FilterTabProps extends FilterTab {
  onFilterClick: (name: string) => void;
};
