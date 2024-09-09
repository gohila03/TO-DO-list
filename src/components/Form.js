import React, { useEffect } from 'react';

const Form = ({ input, setInput, todos, setTodos,editTodo, setEditTodo }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(!editTodo)
        {
           setTodos([...todos, { id: Date.now(), title: input, completed: false }]);
           setInput("");
        }else
        {
            updateTodo(input,editTodo.id,editTodo.completed)
        }


  };
  const updateTodo=(title,id,completed)=>{
    const newtodos = todos.map((todo)=> 
    todo.id ===id?{...todo,title,completed }:todo);
    setTodos(newtodos);
    setEditTodo(null);
  };
  useEffect(()=>{
    if (editTodo) {
        setInput (editTodo.title);
        
    } else {
        setInput('')
    }
  }, [editTodo,setInput])


  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input 
          value={input} 
          onChange={onInputChange} 
          type="text" 
          placeholder='Enter your details' 
          className='task-input' 
        />
        <button className='button-add' type='submit'>{editTodo?'update':'add'}</button>
      </form>
    </div>
  );
}

export default Form;
