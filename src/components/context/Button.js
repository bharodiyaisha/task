import React, { useEffect, useState } from 'react'

const Button = (e) => {

  const [name, setName] = useState('')
  const [input, setInput] = useState('');
  const [item,setItem]=useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleClear = () => {
    console.log("clear")
    setInput('')
  }


  useEffect((data) => {
    fetch("https://api.github.com/users", data)
      .then(res => res.json())
      .then(data => {
        // console.log("data", data)
        setData(data)
      })
  })

  const setData = (name) => {
    setName(name)
  }
  const handleSearch = () => {
    // console.log("search")
    fetch(`https://api.github.com/users/${input}`)
      .then(res => res.json())
      .then(data => {
        console.log("data", data)
        setItem(data)
      // setItem(...item, data);

      })
  }

  return (
    <>
      <div>
        <input type="text" className="form-control" placeholder="Search by name..." onChange={handleInput} />
        <button className="btn btn-outline-secondary" type="submit"  onClick={handleSearch}>Search</button>
        <button className="btn btn-outline-secondary" type="button" onClick={handleClear}>Clear</button>
      </div>
      <div>
        <ul>
          <div></div>
        </ul>
      </div>
    </>
  )
}

export default Button