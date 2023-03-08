import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './CounterSlice';
import { addTodo, removeTodo, editTodo } from './todosSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const todos = useSelector(state => state.todos);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedTodoTitle, setEditedTodoTitle] = useState('');


  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodoTitle.trim() === '') {
      return; // do not add empty todos
    }
    dispatch(addTodo({
      id: uuidv4(),
      title: newTodoTitle,
      completed: false,
    }));
    setNewTodoTitle('');
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (event) => {
    event.preventDefault();
    if (editedTodoTitle.trim() === '') {
      return; // do not edit to empty title
    }
    dispatch(editTodo({
      id: editingTodo.id,
      title: editedTodoTitle,
      completed: editingTodo.completed,
    }));
    setEditingTodo(null);
    setEditedTodoTitle('');
  };
  
  
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <div>
      <h1>Todos:</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editingTodo && editingTodo.id === todo.id ? (
              <form onSubmit={handleEditTodo}>
                <input type="text" value={editedTodoTitle} onChange={(event) => setEditedTodoTitle(event.target.value)} />
                <button type="submit">Save</button>
                <button onClick={() => setEditingTodo(null)}>Cancel</button>
              </form>
            ) : (
              <>
                <span>{todo.title}</span>
                <button onClick={() => setEditingTodo(todo)}>Edit</button>
                <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input type="text" value={newTodoTitle} onChange={(event) => setNewTodoTitle(event.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
   
   
    </div>
    
  );
}

export default App;