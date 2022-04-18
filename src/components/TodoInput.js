import { useState } from "react";

export default function TodoInput({ input, onChange, onSubmit }) {
  const handleKeyPress = e => {
    if (e.key === "Enter") onSubmit();
  };
  return (
    <>
      <input
        placeholder="오늘 할일을 입력해보세요..."
        onChange={onChange}
        onKeyPress={handleKeyPress}
        value={input}
      ></input>
    </>
  );
}
