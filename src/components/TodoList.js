import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onDelete }) {
  return (
    <>
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </>
  );
}
