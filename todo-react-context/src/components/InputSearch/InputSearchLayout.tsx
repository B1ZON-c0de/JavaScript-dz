import { Search } from 'lucide-react';
import type { ChangeEvent } from 'react';

interface IProps {
  search: string;
  handleSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonSort: () => void;
}

const InputSearchLayout = ({
  handleButtonSort,
  handleSearchInput,
  search,
}: IProps) => {
  return (
    <div className="flex justify-between  gap-3">
      <label
        className="input focus:outline-0 w-full items-center text-lg font-semibold bg-base-300 shadow-[inset_0_2px_6px_oklch(70%_0.08_319.62/0.5),inset_0_-2px_4px_oklch(60%_0.10_319.62/0.4)]
         focus:shadow-[inset_0_3px_8px_oklch(55%_0.12_319.62/0.6),inset_0_-3px_6px_oklch(50%_0.12_319.62/0.5)] border-none  transition"
      >
        <Search />
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchInput(e)}
          placeholder="Поиск..."
        />
      </label>
      <button
        onClick={() => {
          handleButtonSort();
        }}
        className="btn btn-neutral focus:border-none border-none text-lg font-semibold"
      >
        Сортировать А-Я
      </button>
    </div>
  );
};

export default InputSearchLayout;
