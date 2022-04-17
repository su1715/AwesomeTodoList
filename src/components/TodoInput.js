import { useState } from "react";

export default function TodoInput({ input, onInputChange, onInputSubmit }) {
  const handleKeyPress = e => {
    if (e.key === "Enter") onInputSubmit();
  };
  return (
    <>
      <input
        placeholder="오늘 할일을 입력해보세요..."
        onChange={onInputChange}
        onKeyPress={handleKeyPress}
        value={input}
      ></input>
    </>
  );
}
