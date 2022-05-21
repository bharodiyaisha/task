import React from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import "./registerForm.css";

const RegisterDetail = ({ item, id, onDelete, onUpdate }) => {

  return (
    <>
      <tr>
        <td>{item.firstName}</td>
        <td>{item.middleName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        <td>{item.hobby}</td>
        <td>{item.gender}</td>
        <td>{item.language}</td>
        <td>{item.date}</td>
        <td>
          < DeleteIcon onClick={() => {
            onDelete(id)
          }} style={{ backgroundColor: "pink", color: "black" }} />
          <EditIcon onClick={() => {
            onUpdate(id)
          }} style={{ backgroundColor: "pink", color: "black" }} /></td>
      </tr>
    </>
  );
};

export default RegisterDetail;


