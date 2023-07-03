import React, { useState } from "react";

function TILEditor() {
  const [state, setState] = useState({
    author: "",
    content: "",
  });
  return (
    <div>
      <h2>오늘의 TIL</h2>
      <div>
        <input
          type="text"
          value={state.author}
          onChange={(e) => {
            setState({
              author: e.target.value,
              ...state,
            });
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default TILEditor;
