import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onDelete, onCheck }) {
  return (
    <>
      {todoList.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onCheck={onCheck}
        />
      ))}
    </>
  );
}
