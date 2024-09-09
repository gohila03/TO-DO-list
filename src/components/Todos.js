import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoCheckboxSharp } from "react-icons/io5";

const Todos = ({ todos, setTodos, setEditTodo}) => {
    const handleDelete=(id)=>{
        setTodos(todos.filter((todo)=>todo.id  !==id))}

const handleComplete=(todo)=>{
    setTodos(todos.map((item) => 
        item.id ===todo.id?{...item,completed:!item.completed}:item))
    }
    const handleEdit= (todo) => {
        setEditTodo(todo)
    }

  return (
    <div>
      {
        todos.map((todo) => (
          <li className='list-item' key={todo.id}>
            <input 
              type="text" 
              className={`list ${todo.completed? "completed":''}`} 
              value={todo.title} 
              onChange={(e) => e.preventDefault()} 
            />
            <button className='button-delete task-button' onClick={()=>handleDelete(todo.id)}>
            <MdDelete />
            </button>
            <button className='button-edit task-button'onClick={()=>handleEdit(todo)}> 
            <FaEdit/>
            </button>
            <button className='button-complete task-button' onClick={()=>handleComplete(todo)}>
            <IoCheckboxSharp />
            </button>
          </li>
        ))
      }
    </div>
  );
}

export default Todos;
