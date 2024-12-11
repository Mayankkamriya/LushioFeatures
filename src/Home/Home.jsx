import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"


const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home-btn-container '>


       <button  onClick={()=>navigate("./postalPinCode")}>  postalPinCode</button>

       <button  onClick={()=>navigate("./AddressSelector")}>  AddressSelector</button>
       <button  onClick={()=>navigate("./EmailForm")}>  SendEmail</button>
       <button  onClick={()=>navigate("./fillstar")}>  FillStar</button>
       <button  onClick={()=>navigate("./DownloadInvoice")}>  DownloadInvoice</button>
       
       <button  onClick={()=>navigate("./popupUse")}>  ResponsivePopup</button>
       <button  onClick={()=>navigate("./quantitychange")}>  Quantitychange</button>
    </div>
  
       )}

export default Home