export interface Filter {
  filter: string;
};

export interface FilterProps extends Filter {
  onSetFilter: () => void;
}
