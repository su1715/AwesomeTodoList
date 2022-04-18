import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoListTemplate.css";
import { useState } from "react";
import TodayDate from "./TodayDate";

export default function TodoListTemplate() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleInputSubmit = () => {
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

  return (
    <div className="todolist-template">
      <TodayDate />
      <TodoList
        todoList={todoList}
        onDelete={handleItemDelete}
        onCheck={handleItemCheck}
      />
      <TodoInput
        input={input}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
    </div>
  );
}
