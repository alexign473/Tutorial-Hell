import React from 'react';

type AddTodoProps = {
  task: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: (e: React.FormEvent) => void;
};

export const AddTodo = ({ task, onChange, onAddTodo }: AddTodoProps) => {
  return (
    <form className='flex justify-between w-full' onSubmit={onAddTodo}>
      <input
        type='text'
        className='flex-1 rounded shadow p-2 text-grey-dark mr-2'
        value={task}
        onChange={onChange}
      />
      <button
        type='submit'
        className='w-10 h-10 flex justify-center items-center bg-yellow-400 hover:bg-yellow-500 text-white text-2xl font-bold rounded-full'
        aria-label='add todo'
      >
        +
      </button>
    </form>
  );
};
