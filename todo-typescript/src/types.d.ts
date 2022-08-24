type Todo = {
  id: number;
  task: string;
  isCompleted: boolean;
};

type Option = {
  value: string;
  color?: string;
  onClick: () => void;
};
