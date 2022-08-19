import React from 'react';

import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className='h-screen bg-gray-100'>
      <div className='flex justify-center items-center'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
