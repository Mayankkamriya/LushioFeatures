import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"


const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home-btn-container'>


       <button  onClick={()=>navigate("./postalPinCode")}>  postalPinCode</button>

       <button  onClick={()=>navigate("./AddressSelector")}>  AddressSelector</button>
       <button  onClick={()=>navigate("./Newproject")}>  Newproject</button>
    </div>
  
       )}

export default Home