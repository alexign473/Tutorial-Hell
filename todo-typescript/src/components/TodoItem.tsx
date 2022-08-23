import React from 'react';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
};

export const TodoItem = ({
  todo: { id, task, isCompleted },
  onDelete,
  onToggleComplete,
}: TodoItemProps) => {
  return (
    <div
      className={`flex justify-between items-center mx-auto my-1 p-4 w-4/5 rounded-2xl shadow
      ${isCompleted ? 'opacity-40' : ''}`}
    >
      <p className={`${isCompleted ? 'line-through' : ''}`}>{task}</p>
      <div className='w-1/6 flex justify-between items-center mr-2'>
        <input
          className='form-checkbox h-5 w-5'
          type='checkbox'
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
        />
        <button
          aria-label='Delete todo'
          className='h-5 w-5 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white rounded'
          onClick={() => onDelete(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
