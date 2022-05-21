import React, { Component } from "react";
import Plan from "./Plan";

export default class App extends Component {
  state = {
    items: [],
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };

  handleDelete = (id) => {
    const todo = [...this.state.items];
    const item = todo.filter((e, i) => {
      return i !== id;
    });
    this.setState({ items: item });
  };

  handleUpdate = (id) => {
    const item = [...this.state.items];
    let newEditItem = item.find((props, index) => {
      return index === id;
    });
    this.setState({ text: newEditItem });
  };

  editItems = (id) => {
    let newItem = this.state.items;
    newItem.splice(id, 1, this.state.text);
    this.setState({ items: newItem });
    this.setState(null);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Name.."
          value={this.state.text}
          onChange={this.handleChange}
        />

        <button onClick={this.handleAdd}>Add</button>

        <button onClick={this.editItems}>Edit</button>
       )
        <div>
          <ul>
            {this.state.items.map((value, i) => {
              return (
                <Plan
                  value={value}
                  key={i}
                  id={i}
                  onDelete={this.handleDelete}
                  onUpdate={this.handleUpdate}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
