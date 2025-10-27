import type { ChangeEvent } from 'react';
import InputSearchLayout from './InputSearchLayout';

interface IProps {
  search: string;
  handleSearchInput: (value: string) => void;
  handleButtonSort: () => void;
}

const InputSearchContainer = ({
                                handleButtonSort,
                                handleSearchInput,
                                search,
                              }: IProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchInput(e.target.value);
  };

  return (
      <InputSearchLayout
          search={search}
          handleSearchInput={handleInputChange}
          handleButtonSort={handleButtonSort}
      />
  );
};

export default InputSearchContainer;