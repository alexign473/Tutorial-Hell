import React from 'react';

type AddTodoProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: (e: React.FormEvent) => void;
};

export const AddTodo = ({ value, onChange, onAddTodo }: AddTodoProps) => {
  return (
    <form
      className='flex justify-center mx-4 sm:mx-8 mb-8 '
      onSubmit={onAddTodo}
    >
      <input
        type='text'
        className='px-4 py-[15px] flex-1 border border-gray-300 rounded-l-2xl bg-transparent outline-none'
        placeholder='Add a todo'
        value={value}
        onChange={onChange}
      />
      <button
        type='submit'
        className='p-4 rounded-r-2xl bg-grad-purple-to-blue text-white capitalize'
        aria-label='add todo'
      >
        Add&nbsp;Todo
      </button>
    </form>
  );
};
