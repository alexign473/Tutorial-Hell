import React, { ChangeEvent, FormEvent, useState } from 'react';

import { todos as initialTodos } from '../data';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

import { Todo } from '../types';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [task, setTask] = useState('');

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCheckTodo = (id: string) => {
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
    setTask('');
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
  };

  return (
    <section className='w-10/12 sm:w-8/12 lg:w-1/2 max-w-2xl flex flex-col items-center'>
      <AddTodo
        task={task}
        onChange={handleChange}
        onAddTodo={handleSubmitTodo}
      />
      <div className='h-10' />

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteTodo}
          onChange={handleCheckTodo}
        />
      ))}
    </section>
  );
};
