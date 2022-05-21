//https://api.github.com/search/users
import React from 'react';
// import axios from "axios";


import Button from './Button'
import "./example.css"

const Example = () => {

  // async function makePostRequest(data) {
  //   let res = await axios.post("https://api.github.com/users/search",data);
  // }
  //   const onSubmit=()=>{
  //     makePostRequest();
  //   }
  return (
     <div>
        <h1>UseContext</h1>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search by name..." aria-label="Search by name with two button addons" />
          <Button />
          {/* <button class="btn btn-outline-secondary" type="button" >Search</button>
           <button class="btn btn-outline-secondary" type="button">Clear</button> */}
        </div>
      </div>
  )
}

export default Example;