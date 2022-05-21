import React, { useState } from "react";

import Plan from "./Plan";

const TodoFunction = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    setItems([...items, data]);
    setData("");
  };

  const handleDelete = (id) => {
    console.log("delete");
    setItems((item) => {
      return item.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  const handleUpdate = (id) => {
    let newEditItem = items.find((props, index) => {
      return index === id;
    });
    setData(newEditItem);
    setEditId(id);
  };

  const editItems2 = () => {
    let newItem = items;
    newItem.splice(editId, 1, data);
    setItems(newItem);
    setEditId(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name.."
        value={data}
        onChange={handleChange}
      />
     
      {editId === null ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={editItems2}>Edit</button>
      )}
      
      <ul>
        {items.map((value, i) => {
          return (
            <div>
              <Plan
                value={value}
                key={i}
                id={i}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoFunction;
