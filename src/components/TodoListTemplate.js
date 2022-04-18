import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoListTemplate.css";
import { useState, useEffect } from "react";
import TodayDate from "./TodayDate";

export default function TodoListTemplate() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => console.log(todoList), [todoList]);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleInputSubmit = () => {
    if (input !== "")
      setTodoList(prev => [
        ...prev,
        { id: Date.now(), task: input, isChecked: false }
      ]);
    setInput("");
  };

  const handleItemDelete = id => {
    setTodoList(prev => prev.filter(item => item.id !== id));
  };

  const handleItemCheck = id => {
    setTodoList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleItemChange = (id, newTask) => {
    setTodoList(prev =>
      prev.map(item => (item.id === id ? { ...item, task: newTask } : item))
    );
  };

  return (
    <div className="todolist-template">
      <TodayDate />
      <h1 className="todolist-title">Todo List</h1>
      <hr />
      <TodoList
        todoList={todoList}
        onDelete={handleItemDelete}
        onCheck={handleItemCheck}
        onChange={handleItemChange}
      />
      <TodoInput
        input={input}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  );
}
