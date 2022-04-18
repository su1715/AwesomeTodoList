import "../css/TodoItem.css";

export default function TodoItem({ item, onDelete, onCheck }) {
  const handleClick = e => {
    if (e.target.tagName === "BUTTON") onDelete(item.id);
    else if (e.target.tagName === "SPAN") onCheck(item.id);
  };
  return (
    <div onClick={handleClick}>
      <span className={item.isChecked ? "checked" : ""}>{item.task}</span>
      <button>delete</button>
    </div>
  );
}
