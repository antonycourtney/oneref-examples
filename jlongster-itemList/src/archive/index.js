import React, { useState, useCallback, useReducer } from "react";
import ReactDOM from "react-dom";

let itemData = [
  { id: 1, name: "Milk Chocolate" },
  { id: 2, name: "Dark Chocolate" },
  { id: 3, name: "White Chocolate" },
  { id: 4, name: "Raw Chocolate" },
  { id: 5, name: "Chocolate Milk" }
];

let lastColor;

function generateNewColor() {
  lastColor =
    "rgba(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ",1)";
}

let Row = React.memo(({ item, editing, onEdit, onSave }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #f0f0f0",
        padding: 10,
        display: "flex"
      }}
      onClick={() => onEdit(item.id)}
    >
      <div style={{ flex: 1 }}>
        <input
          defaultValue={item.name}
          style={editing ? null : { width: 0, opacity: 0 }}
          onBlur={e => {
            onSave({ ...item, name: e.target.value });
          }}
        />
        {editing ? null : item.name}
      </div>
      <div style={{ backgroundColor: lastColor, width: 25, height: 25 }} />
    </div>
  );
});

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "save-item": {
        let { item } = action;
        return {
          ...state,
          items: state.items.map(it => (it.id === item.id ? item : it))
        };
      }
      case "edit-item": {
        return { ...state, editingId: action.id };
      }
    }
  }

  let [state, dispatch] = useReducer(reducer, {
    items: itemData,
    editingId: null
  });

  generateNewColor();

  let onEdit = useCallback(id => {
    dispatch({ type: "edit-item", id });
  }, []);

  let onSave = useCallback(item => {
    dispatch({ type: "save-item", item });
  }, []);

  return (
    <div>
      {state.items.map(item => (
        <Row
          key={item.id}
          item={item}
          editing={state.editingId === item.id}
          onEdit={onEdit}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
