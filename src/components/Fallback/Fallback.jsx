import React from "react";

export default function Fallback({ err }) {
  return (
    <div>
      <h2>Упс. Что-то пошло не так:</h2>
      <pre style={{ color: "red" }}>{err.message}</pre>
    </div>
  );
}
