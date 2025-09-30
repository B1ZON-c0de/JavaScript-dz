import type { ChangeEvent } from 'react';
import InputSearchLayout from './InputSearchLayout';
import { useSearch } from '../../hooks/contextHooks/useSearch';

const InputSearchContainer = () => {
  const { search, setSearch, isSorted, setIsSorted } = useSearch();
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleButtonSort = () => {
    setIsSorted(!isSorted);
  };
  return (
    <InputSearchLayout
      search={search}
      handleSearchInput={handleSearchInput}
      handleButtonSort={handleButtonSort}
    />
  );
};

export default InputSearchContainer;
