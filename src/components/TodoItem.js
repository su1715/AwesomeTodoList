import "../css/TodoItem.css";
import { useState } from "react";
import { BsXSquare } from "react-icons/bs";

export default function TodoItem({ item, onDelete, onCheck }) {
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    onCheck(item.id);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div
      className="todoitem"
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className={`item-task ${item.isChecked ? "checked" : ""}`}>
        {item.task}
      </span>
      {isHover ? (
        <div className="delete" onClick={handleDelete}>
          <BsXSquare size="30"></BsXSquare>
        </div>
      ) : null}
    </div>
  );
}
