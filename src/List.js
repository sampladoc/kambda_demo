import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo, showEdit, editTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.edit ? (
        <EditForm
          text={todo.text}
          editTodo={editTodo}
          index={index}
        />
      ) : (
        <div>
          {todo.text}
        </div>
      )}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => showEdit(index)}>Edit</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function EditForm({ text, editTodo, index }) {
  const [value, setValue] = useState(text);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    editTodo(value, index);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function List() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
      edit: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      edit: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      edit: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const editTodo = (text, index) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    newTodos[index].edit = false;
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const showEdit = index => {
    const newTodos = [...todos];
    newTodos[index].edit = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            showEdit={showEdit}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    
  );
}

export default List;
