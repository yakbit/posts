import React from "react";

export const Form = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userId" placeholder="userId" />
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="body" placeholder="body" />
        <button>!Guardar nuevo post!</button>
      </form>
    </div>
  );
};
