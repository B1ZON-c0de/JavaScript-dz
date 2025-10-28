import { Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks.ts";
import { setSearchTerm, toggleSorted } from "../../store/todoSlice.ts";

const InputSearchLayout = () => {
  const search = useAppSelector((state) => state.todos.search);
  const dispatch = useAppDispatch();
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
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Поиск..."
        />
      </label>
      <button
        onClick={() => dispatch(toggleSorted())}
        className="btn btn-neutral focus:border-none border-none text-lg font-semibold"
      >
        Сортировать А-Я
      </button>
    </div>
  );
};

export default InputSearchLayout;
