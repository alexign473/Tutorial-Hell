import React, { ChangeEvent, FormEvent, useState } from 'react';

import { todos as initialTodos } from '../data';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [task, setTask] = useState<string>('');

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggleComplete = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target?.value);
  };

  const handleAddTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!task) return;

    const todo: Todo = {
      id: String(Math.floor(Math.random() * 100) + todos.length),
      task,
      isCompleted: false,
    };
    handleAddTodo(todo);
    setTask('');
  };

  return (
    <div
      className='flex flex-col justify-start w-[500px] min-h-[500px]
    bg-white text-center rounded-md'
    >
      <h1 className='mx-auto my-8 text-2xl font-semibold'>Todo App</h1>
      <section className='py-2'>
        <AddTodo
          value={task}
          onChange={handleChange}
          onAddTodo={handleSubmitTodo}
        />

        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </section>
    </div>
  );
};
