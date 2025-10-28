export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  pending?: boolean;
}

export interface ITodoStore {
  tasks: ITodo[];
  status: "idle" | "pending" | "completed" | "failed";
  error?: string | null;
  search: string;
  isSorted: boolean;
}
