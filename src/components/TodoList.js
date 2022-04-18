import TodoItem from "./TodoItem";
import "../css/TodoList.css";

export default function TodoList({ todoList, onDelete, onCheck, onChange }) {
  return (
    <div className="todolist">
      {todoList.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onCheck={onCheck}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
