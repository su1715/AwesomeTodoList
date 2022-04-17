export default function TodoItem({ item, onDelete }) {
  const handleClick = e => {
    if (e.target.tagName === "BUTTON") onDelete(item.id);
    else console.log("toggle");
  };
  return (
    <div onClick={handleClick}>
      {item.task}
      <button>delete</button>
    </div>
  );
}
