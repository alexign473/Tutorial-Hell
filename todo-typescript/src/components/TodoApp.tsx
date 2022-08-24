import React, { ChangeEvent, FormEvent, useState } from 'react';

import { todos as initialTodos } from '../data';
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [task, setTask] = useState<string>('');

  const deleteTodo = (id: Todo['id']) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id: Todo['id'], newTask: Todo['task']) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        console.log(id);
        return {
          ...todo,
          task: newTask,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (id: Todo['id']) => {
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

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target?.value);
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!task) return;

    const todo: Todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 0,
      task,
      isCompleted: false,
    };
    addTodo(todo);
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
            onDelete={deleteTodo}
            onEdit={editTodo}
            onToggleComplete={toggleCompleteTodo}
          />
        ))}
      </section>
    </div>
  );
};
