import "../css/TodoItem.css";
import { useState } from "react";
import { BsXSquare } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

export default function TodoItem({ item, onDelete, onCheck }) {
  const [isHover, setIsHover] = useState(false);
  const colors = ["#6867AC", "#A267AC", "#CE7BB0", "#FFBCD1"];

  const handleClick = () => {
    onCheck(item.id);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div
      className={`${item.isChecked ? "checked" : ""} todoitem`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div onClick={handleClick}>
        {item.isChecked ? (
          <BsCheckCircle size="30" color={colors[3]} />
        ) : (
          <BsCircle size="30" color={isHover ? "white" : "black"} />
        )}
      </div>
      <input disabled className="item-task" value={item.task} />
      {isHover ? (
        <div className="delete" onClick={handleDelete}>
          <BsXSquare size="30"></BsXSquare>
        </div>
      ) : null}
    </div>
  );
}
