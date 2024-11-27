import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AddressSelector from './AddressSelector/AddressSelector';
import PostalPinCode from './postalPinCode/postalPinCode';
import EmailForm from './sendEmail/EmailForm';
import FillStar from './FillStar/fillstar';
import InvoiceDownload from "./DownloadInvoice/InvoiceDownload";
const App = () => {
  return (
    <Router>
      <div>
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postalPinCode" element={<PostalPinCode />} />
          <Route path="/AddressSelector" element={<AddressSelector />} />
          <Route path="/EmailForm" element={<EmailForm />} />
          <Route path="/fillstar" element={<FillStar/>} />
          <Route path="/DownloadInvoice" element={<InvoiceDownload/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App