import type { ChangeEvent } from 'react';
import InputSearchLayout from './InputSearchLayout';

interface IProps {
  search: string;
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonSort: () => void;
}

const InputSearchContainer = ({
  handleButtonSort,
  handleSearchInput,
  search,
}: IProps) => {
  return (
    <InputSearchLayout
      search={search}
      handleSearchInput={handleSearchInput}
      handleButtonSort={handleButtonSort}
    />
  );
};

export default InputSearchContainer;
