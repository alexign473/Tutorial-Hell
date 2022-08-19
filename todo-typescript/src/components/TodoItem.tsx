import React from 'react';

import { Todo } from '../types';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onChange: (id: string) => void;
};

export const TodoItem = ({
  todo: { id, task, isCompleted },
  onDelete,
  onChange,
}: TodoItemProps) => {
  return (
    <div
      className={`flex w-full p-4 mb-2 justify-between items-center
      ${isCompleted ? 'bg-gray-400' : 'bg-green-300'}
    `}
    >
      <p>{id}</p>
      <p
        className={`ml-2 text-xl font-sans font-medium
        ${isCompleted ? 'text-white line-through' : 'text-gray-700'}
      `}
      >
        {task}
      </p>
      <div className='w-1/6 flex justify-between items-center mr-2'>
        <input
          className='form-checkbox h-7 w-7'
          type='checkbox'
          checked={isCompleted}
          onChange={() => onChange(id)}
        />
        <button
          aria-label='Delete todo'
          className='h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded'
          onClick={() => onDelete(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
