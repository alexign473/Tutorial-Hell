import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { Dropdown } from './Dropdown';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: Todo['id']) => void;
  onEdit: (id: Todo['id'], newTask: Todo['task']) => void;
  onToggleComplete: (id: Todo['id']) => void;
};

export const TodoItem = ({
  todo: { id, task, isCompleted },
  onDelete,
  onEdit,
  onToggleComplete,
}: TodoItemProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [input, setInput] = useState<string>(task);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleUpdatedDone = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditing(false);
      onEdit(id, input);
    }
  };

  const calcelEdit = () => {
    handleEdit();
    setInput(task);
  };

  const dropdownOptions: Array<Option> = [
    {
      value: 'Edit',
      onClick: handleEdit,
    },
    {
      value: 'Delete',
      onClick: handleDelete,
    },
  ];

  return (
    <div
      className={`flex justify-between items-center mx-auto my-1 p-4 w-4/5 rounded-2xl shadow
      ${isCompleted ? 'opacity-40' : ''}`}
    >
      {editing ? (
        <input
          type='text'
          className='border-b outline-none w-4/5'
          value={input}
          onChange={handleChange}
          onKeyDown={handleUpdatedDone}
        />
      ) : (
        <p className={`${isCompleted ? 'line-through' : ''}`}>{task}</p>
      )}
      <div className='w-1/6 flex justify-between items-center mr-2'>
        <input
          className='form-checkbox h-5 w-5'
          type='checkbox'
          checked={isCompleted}
          onChange={() => onToggleComplete(id)}
        />
        <Dropdown options={dropdownOptions} />
      </div>
    </div>
  );
};
