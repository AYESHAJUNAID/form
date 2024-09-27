import react, { useState } from 'react'

  


import './App.css'

function App() {
  const [ details , setDetails] = useState({

    name: "",
    email: "",
    password: "",


  })
  const handleChange = (e) => {
    const{name,value} = e.target
    setDetails((prev) => {
      return{...prev, [name]: value}
    })
  }
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(details)
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3> Name : </h3> <input type="text" name='name'  onChange={handleChange}/>
      <h3> Email : </h3> <input type="email" name='email' onChange={handleChange} />
      <h3> password : </h3> 
       <input type="password" name='password' onChange={handleChange} />
      <button onClick={handleSubmit} type='Submit'> Submit</button>
      



    </form>
    
    </>
  )
}
  

export default App
