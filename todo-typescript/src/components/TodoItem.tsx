import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5';

import { Dropdown } from './Dropdown';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: Todo['id']) => void;
  onEdit: (id: Todo['id'], newTask: Todo['task']) => void;
  onToggleComplete: (id: Todo['id']) => void;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
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

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleUpdate = () => {
    setEditing(false);
    onEdit(id, input);
  };

  const handleUpdateOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  const calcelEdit = () => {
    toggleEdit();
    setInput(task);
  };

  const dropdownOptions: Array<Option> = [
    {
      value: 'Edit',
      onClick: toggleEdit,
    },
    {
      value: 'Delete',
      onClick: handleDelete,
    },
  ];

  return (
    <div
      className={`mx-auto my-1 p-4 w-4/5 rounded-2xl shadow
      ${isCompleted ? 'opacity-40' : ''}`}
    >
      {editing ? (
        <div className='flex justify-between items-center'>
          <input
            type='text'
            className='border-b outline-none w-5/6'
            value={input}
            onChange={handleChange}
            onKeyDown={handleUpdateOnEnter}
          />
          <div className='w-1/6 flex justify-between items-center mr-2'>
            <Button onClick={handleUpdate}>
              <IoCheckmarkSharp />
            </Button>
            <Button onClick={calcelEdit}>
              <IoCloseSharp />
            </Button>
          </div>
        </div>
      ) : (
        <div className='flex justify-between items-center '>
          <p
            className={`${isCompleted ? 'line-through' : ''}`}
            onDoubleClick={toggleEdit}
          >
            {task}
          </p>
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
      )}
    </div>
  );
};

const Button = ({ children, onClick }: ButtonProps) => (
  <button
    className='text-xl text-white bg-grad-purple-to-blue'
    onClick={onClick}
  >
    {children}
  </button>
);
