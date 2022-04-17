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
    setTodoList(prev => [...prev, { id: new Date(), task: input }]);
    setInput("");
  };

  const handleItemDelete = id => {
    setTodoList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="todolist-template">
      <TodayDate />
      <TodoList todoList={todoList} onDelete={handleItemDelete} />
      <TodoInput
        input={input}
        onInputChange={handleInputChange}
        onInputSubmit={handleInputSubmit}
      />
    </div>
  );
}
