/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React, { useState } from "react";

import RegisterDetail from "./RegisterDetail";
import "./registerForm.css";

const RegisterForm = (e) => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [hobby, setHobby] = useState([]);
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState([]);
  const [date, setDate] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [validation, setValidation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let errors = { ...validation };
    const newData = {
      fname: fname,
      mname: mname,
      lname: lname,
      email: email,
      address: address,
      city: city,
      state: state,
      hobby: hobby,
      gender: gender,
      language: language,
      date: date,
    };
    {
      !fname
        ? (errors.firstName = "First Name is required")
        : console.log("firstName");
    }
    {
      !mname
        ? (errors.middleName = "Middle Name is required")
        : console.log("middleName");
    }
    {
      !lname
        ? (errors.lastName = "Last Name is required")
        : console.log("lastName");
    }
    {
      !email ? (errors.email = "Email is required") : console.log("email");
    }
    {
      !address
        ? (errors.address = "Address is required")
        : console.log("address");
    }
    {
      !city ? (errors.city = "City is required") : console.log("city");
    }
    {
      !state ? (errors.state = "State is required") : console.log("state");
    }
    {
      !hobby ? (errors.hobby.length = "select hobby") : console.log("hobby");
    }
    {
      !gender ? (errors.gender = "Gender is required") : console.log("gender");
    }
    {
      !language
        ? (errors.language.length = "language is required")
        : console.log("language");
    }
    {
      !date
        ? (errors.date = "Date is required")
        : setItems([...items, newData]);
    }
    setValidation(errors);
    onReset();
  };

  const handleInput = (e) => {
    const newArray = [...hobby];
    const { value } = e.target;
    if (hobby.includes(value)) {
      let newItem = newArray.findIndex((index) => {
        return index === value;
      });
      newArray.splice(newItem, 1);
    } else {
      newArray.push(value);
    }
    setHobby(newArray);
  };

  const inputHandle = (e) => {
    const newArray = [...language];
    const { value } = e.target;

    if (language.includes(value)) {
      let newItem = newArray.findIndex((index) => {
        return index === value;
      });
      newArray.splice(newItem, 1);
    } else {
      newArray.push(value);
    }
    setLanguage(newArray);
  };

  const onReset = () => {
    setFname("");
    setMname("");
    setLname("");
    setEmail("");
    setAddress("");
    setCity("");
    setState("");
    setHobby([]);
    setGender("");
    setLanguage([]);
    setDate("");
  };

  const handleDelete = (id) => {
    setItems((item) => {
      return item.filter((arr, index) => {
        return index !== id;
      });
    });
    onReset();
  };

  const handleUpdate = (id) => {
    let newEditItem = items.find((props, index) => {
      return index === id;
    });
    setFname(newEditItem.fname);
    setMname(newEditItem.mname);
    setLname(newEditItem.lname);
    setEmail(newEditItem.email);
    setAddress(newEditItem.address);
    setCity(newEditItem.city);
    setState(newEditItem.state);
    setHobby(newEditItem.hobby);
    setGender(newEditItem.gender);
    setLanguage(newEditItem.language);
    setDate(newEditItem.date);
    setEditId(id);
  };

  const editItem = () => {
    let newItem = items;
    const newData = {
      fname: fname,
      mname: mname,
      lname: lname,
      email: email,
      address: address,
      city: city,
      state: state,
      hobby: hobby,
      gender: gender,
      language: language,
      date: date,
    };
    newItem.splice(editId, 1, newData);
    setItems(newItem);
    setEditId(null);
    onReset();
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <>
      <div className="m_div">
        <div className="c_div">
          <div className="title">
            <h1>REGISTRATION FORM</h1>
          </div>
          <div>
            <div className="form_wrap">
              <div className="input_grp">
                <div className="input_wrap">
                  <label className="lb" style={{ marginLeft: "-82px" }}>
                    First Name
                  </label>
                  <input
                    className="txt"
                    type="text"
                    name="firstName"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  ></input>
                  {<p className="p">{validation.firstName}</p>}
                </div>

                <div className="input_wrap">
                  <label className="lb" style={{ marginLeft: "-62px" }}>
                    Middle Name
                  </label>
                  <input
                    className="txt"
                    type="text"
                    name="middleName"
                    value={mname}
                    onChange={(e) => setMname(e.target.value)}
                  ></input>
                  {<p className="p">{validation.middleName}</p>}
                </div>

                <div className="input_wrap">
                  <label className="lb" style={{ marginLeft: "-82px" }}>
                    Last Name
                  </label>
                  <input
                    className="txt"
                    type="text"
                    name="lastName"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  ></input>
                  {<p className="p">{validation.lastName}</p>}
                </div>
              </div>

              <div className="input_wrap">
                <label className="lb" style={{ marginLeft: "-393px" }}>
                  Email Address
                </label>
                <input
                  className="txt2"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {<p className="p">{validation.email}</p>}
              </div>

              <div className="input_wrap">
                <label className="lb" style={{ marginLeft: "-434px" }}>
                  Address
                </label>
                <input
                  className="txt3"
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
                {<p className="p">{validation.address}</p>}
              </div>

              <div className="input_wrap">
                <label className="lb2">City</label>
                <select
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="select"
                >
                  <option>---Select City--</option>
                  <option value="surat">Surat</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="amritsar">Amritsar</option>
                </select>
                {<p className="p">{validation.city}</p>}
              </div>

              <div className="input_wrap">
                <label className="lb3">State</label>
                <select
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="select"
                >
                  <option>---Select State---</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="punjab">Punjab</option>
                </select>
                {<p className="p">{validation.state}</p>}
              </div>

              <div className="input_wrap">
                <label className="lb4">Hobby</label>
                <input
                  className="check-space"
                  style={{ marginLeft: "-153px" }}
                  type="checkbox"
                  value="Cricket"
                  checked={hobby.includes("Cricket")}
                  onChange={handleInput}
                />
                Cricket &nbsp;&nbsp;
                <input
                  className="check-space"
                  type="checkbox"
                  value="Reading"
                  checked={hobby.includes("Reading")}
                  onChange={handleInput}
                />
                Reading &nbsp;&nbsp;
                <input
                  className="check-space"
                  type="checkbox"
                  value="Cooking"
                  checked={hobby.includes("Cooking")}
                  onChange={handleInput}
                />
                Cooking &nbsp;&nbsp;
                <input
                  className="check-space"
                  type="checkbox"
                  value="Traveling"
                  checked={hobby.includes("Traveling")}
                  onChange={handleInput}
                />
                Traveling
                {<p className="p">{validation.hobby}</p>}
              </div>

              <div className="input_wrap">
                <label className="lb6">Gender</label>
                <input
                  className="check-space"
                  style={{ marginLeft: "-360px", color: "white" }}
                  type="radio"
                  value="Male"
                  checked={gender === "male"}
                  onChange={handleGender}
                />
                Male &nbsp;&nbsp;
                <input
                  className="check-space"
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={handleGender}
                />
                Female
                {<p className="p">{validation.gender}</p>}
              </div>

              <div className="input_wrap">
                <label className="lb5">Language</label>
                <input
                  className="check-space"
                  style={{ marginLeft: "-270px" }}
                  type="checkbox"
                  value="Hindi"
                  checked={language.includes("Hindi")}
                  onChange={inputHandle}
                />
                Hindi &nbsp;&nbsp;
                <input
                  className="check-space"
                  type="checkbox"
                  value="Gujarati"
                  checked={language.includes("Gujarati")}
                  onChange={inputHandle}
                />
                Gujarati &nbsp;&nbsp;
                <input
                  className="check-space"
                  type="checkbox"
                  value="English"
                  checked={language.includes("English")}
                  onChange={inputHandle}
                />
                English
                {<p className="p">{validation.language}</p>}
              </div>

              <div className="input_wrap">
                <label className="lb5">BirthDate</label>
                <input
                  style={{ marginLeft: "-370px" }}
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <p className="p">{validation.date}</p>
              </div>

              <div className="btn">
                {editId === null ? (
                  <button
                    type="button"
                    className="button"
                    onClick={onSubmit}
                    style={{ backgroundColor: "pink", color: "black" }}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button"
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
                  className="button"
                  onClick={onReset}
                  style={{ backgroundColor: "pink", color: "black" }}
                >
                  Reset
                </button>
              </div>
            </div>
            <br />
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
    </>
  );
};

export default RegisterForm;
