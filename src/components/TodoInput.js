import "../css/TodoInput.css";

export default function TodoInput({ input, onChange, onSubmit }) {
  const handleKeyPress = e => {
    if (e.key === "Enter") onSubmit();
  };
  return (
    <div className="todoinput-wrapper">
      <input
        className="todoinput"
        placeholder="오늘 할일을 입력해보세요..."
        onChange={onChange}
        onKeyPress={handleKeyPress}
        value={input}
      ></input>
    </div>
  );
}
