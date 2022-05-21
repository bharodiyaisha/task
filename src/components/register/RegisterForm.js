/* eslint-disable no-lone-blocks */
import React, { useState } from "react";

import RegisterDetail from "./RegisterDetail";
import "./registerForm.css";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  state: "",
  hobby: [],
  gender: "",
  language: [],
  date: "",
};

const RegisterForm = () => {
  const [data, setData] = useState(initialData);
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [validation, setValidation] = useState(initialData);
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (error) {
      validator();
    }
  };

  const validator = (e) => {
    let errors = { ...initialData };
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let isValid = true;
    if (!data.firstName) {
      errors.firstName = "First name is required";
      isValid = false;
    }
    if (!data.middleName) {
      errors.middleName = "Middle name is required";
      isValid = false;
    }
    if (!data.lastName) {
      errors.lastName = " Last name is required";
      isValid = false;
    }
    if (!data.email) {
      errors.email = "Email id is required";
      isValid = false;
    } else if (!regex.test(data.email)) {
      errors.email = "Enter valid Email id";
      isValid = false;
    }
    if (!data.address) {
      errors.address = "Address is required";
      isValid = false;
    }
    if (!data.city) {
      errors.city = "Select city ";
      isValid = false;
    }
    if (!data.state) {
      errors.state = "Select state ";
      isValid = false;
    }
    if (!data.hobby.length) {
      errors.hobby = "Select hobby ";
      isValid = false;
    }
    if (!data.gender) {
      errors.gender = "Select Gender ";
      isValid = false;
    }
    if (!data.language.length) {
      errors.language = "Select language";
      isValid = false;
    }
    if (!data.date) {
      errors.date = "Select Date";
      isValid = false;
    }
    setValidation(errors);
    return isValid;
  };

  const onSubmit = () => {
    if (validator()) {
      setItems([...items, data]);
      setError(false);
      onReset();
    } else {
      setError(true);
    }
  };

  const onReset = () => {
    setData(initialData);
  };

  const handleDelete = (id) => {
    setItems((item) => {
      return item.filter((arr, index) => {
        return index !== id;
      });
    });
    setData(initialData);
  };

  const handleUpdate = (id) => {
    let newEditItem = items.find((props, index) => {
      return index === id;
    });
    setData(newEditItem);
    setEditId(id);
  };

  const editItem = () => {
    if (validator()) {
      let newItem = items;
      newItem.splice(editId, 1, data);
      setEditId(null);
      setData(initialData);
      setItems(newItem);
      setError(false);
      onReset();
    } else {
      setError(true);
    }
  };

  const handleHobby = (e) => {
    const newArray = [...data.hobby];
    const { value } = e.target;
    if (data.hobby.includes(value)) {
      let newItem = newArray.findIndex((index) => {
        return index === value;
      });
      newArray.splice(newItem, 1);
    } else {
      newArray.push(value);
    }
    setData({ ...data, hobby: newArray });
  };

  const handleLanguage = (e) => {
    const newArray = [...data.language];
    const { value } = e.target;
    if (data.language.includes(value)) {
      let newItem = newArray.findIndex((index) => {
        return index === value;
      });
      newArray.splice(newItem, 1);
    } else {
      newArray.push(value);
    }
    setData({ ...data, language: newArray });
  };

  return (
    <div className="m_div">
      <div className="c_div">
        <div className="title">
          <h1>REGISTRATION FORM</h1>
        </div>
        <div>
          <div className="form_wrap">
            <div className="input_grp">
              <div className="input_wrap">
                <label className="lb"> FirstName</label>
                <input
                  className="txt"
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleInput}
                />
                {<p className="p">{validation.firstName}</p>}
              </div>
              <div className="input_wrap">
                <label className="lb7">MiddleName</label>
                <input
                  className="txt"
                  type="text"
                  name="middleName"
                  value={data.middleName}
                  onChange={handleInput}
                />
                {<p className="p">{validation.middleName}</p>}
              </div>
              <div className="input_wrap">
                <label className="lb">Last Name </label>
                <input
                  className="txt"
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleInput}
                />
                {<p className="p">{validation.lastName}</p>}
              </div>
            </div>
            <div className="input_wrap">
              <label className="lb1">Email Id</label>
              <input
                className="txt2"
                type="email"
                name="email"
                value={data.email}
                onChange={handleInput}
              />
              {<p className="p3">{validation.email}</p>}
            </div>
            <div className="input_wrap">
              <label className="lb1">Address</label>
              <textarea
                className="txt3"
                type="text"
                name="address"
                value={data.address}
                onChange={handleInput}
              />
              {<p className="p3">{validation.address}</p>}
            </div>
            <div className="input_wrap">
              <label className="lb2">City:</label>
              <select
                name="city"
                value={data.city}
                onChange={handleInput}
                className="select"
              >
                <option value="">---Select City--</option>
                <option value="surat">Surat</option>
                <option value="mumbai">Mumbai</option>
                <option value="jaipur">Jaipur</option>
                <option value="amritsar">Amritsar</option>
              </select>
              {<p className="p4">{validation.city}</p>}
            </div>
            <div className="input_wrap">
              <label className="lb3">State:</label>
              &nbsp;
              <select
                name="state"
                value={data.state}
                onChange={handleInput}
                className="select"
              >
                <option value="">---Select State---</option>
                <option value="gujarat">Gujarat</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="punjab">Punjab</option>
              </select>
              {<p className="p1">{validation.state}</p>}
            </div>
            <br />
            <div className="input_wrap">
              <label className="lb4">Hobby:</label>
              <input
                className="check-space"
                style={{ marginLeft: "-132px" }}
                type="checkbox"
                name="hobby"
                value="Cricket"
                checked={data.hobby.includes("Cricket")}
                onChange={handleHobby}
              />
              Cricket &nbsp;&nbsp;
              <input
                className="check-space"
                type="checkbox"
                name="hobby"
                value="Reading"
                checked={data.hobby.includes("Reading")}
                onChange={handleHobby}
              />
              Reading &nbsp;&nbsp;
              <input
                className="check-space"
                type="checkbox"
                name="hobby"
                value="Cooking"
                checked={data.hobby.includes("Cooking")}
                onChange={handleHobby}
              />
              Cooking &nbsp;&nbsp;
              <input
                className="check-space"
                type="checkbox"
                name="hobby"
                value="Traveling"
                checked={data.hobby.includes("Traveling")}
                onChange={handleHobby}
              />
              Traveling &nbsp;&nbsp;
              {<p className="p1">{validation.hobby}</p>}
            </div>
            <div className="input_wrap">
              <label className="lb6">Gender:</label>
              <input
                className="check-space"
                style={{ marginLeft: "-355px" }}
                type="radio"
                name="gender"
                value="Male"
                checked={data.gender === "Male"}
                onChange={handleInput}
              />
              Male &nbsp;&nbsp;
              <input
                className="check-space"
                type="radio"
                name="gender"
                value="Female"
                checked={data.gender === "Female"}
                onChange={handleInput}
              />
              Female
              {<p className="p6">{validation.gender}</p>}
            </div>
            <div className="input_wrap">
              <label className="lb5">Language:</label>
              <input
                className="check-space"
                style={{ marginLeft: "-255px" }}
                type="checkbox"
                name="language"
                value="Hindi"
                checked={data.language.includes("Hindi")}
                onChange={handleLanguage}
              />
              Hindi &nbsp;&nbsp;
              <input
                className="check-space"
                type="checkbox"
                name="language"
                value="Gujarati"
                checked={data.language.includes("Gujarati")}
                onChange={handleLanguage}
              />
              Gujarati &nbsp;&nbsp;
              <input
                className="check-space"
                type="checkbox"
                name="language"
                value="English"
                checked={data.language.includes("English")}
                onChange={handleLanguage}
              />
              English &nbsp;&nbsp;
              {<p className="p5">{validation.language}</p>}
            </div>
            <div className="input_wrap">
              <label className="lb5">BirthDate:</label>
              <input
                className="inputDate"
                type="date"
                name="date"
                value={data.date}
                onChange={handleInput}
              />
              {<p className="p1">{validation.date}</p>}
              <br />
            </div>
            <div className="btn">
              {editId === null ? (
                <button
                  type="button"
                  className="btn1"
                  onClick={onSubmit}
                  style={{ backgroundColor: "pink", color: "black" }}
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  className="btn1"
                  onClick={editItem}
                  style={{ backgroundColor: "pink", color: "black" }}
                >
                  Edit
                </button>
              )}
              <br />
              <br />
              <button
                type="button"
                className="btn2"
                onClick={onReset}
                style={{ backgroundColor: "pink", color: "black" }}
              >
                Reset
              </button>
            </div>
          </div>
          {items.length ? (
            <div className="app">
              <ul>
                <table style={{ marginLeft: "-350px" }}>
                  <tr>
                    <th>FirstName</th>
                    <th>MiddleName</th>
                    <th>LastName</th>
                    <th>EmailId</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Hobby</th>
                    <th>Gender</th>
                    <th>Language</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                  {items.map((item, i) => {
                    return (
                      <RegisterDetail
                        item={item}
                        id={i}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                      />
                    );
                  })}
                </table>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
