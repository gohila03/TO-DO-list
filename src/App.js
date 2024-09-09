import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const[editTodo,setEditTodo] = useState(null)
  return (
    <div className="App">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <div>
            <Todos
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
