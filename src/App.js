import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AddressSelector from './AddressSelector/AddressSelector';
import PostalPinCode from './postalPinCode/postalPinCode';
import EmailForm from './sendEmail/EmailForm';
import SendEmailer from './sendEmailer/sendEmailer';
import FillStar from './FillStar/fillstar';
import InvoiceDownload from "./DownloadInvoice/InvoiceDownload";
import PopupUse from './responsive-popup/popupUse';

import Quantitychange from './quantitychange/quantitychange';
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
          <Route path="/popupUse" element={<PopupUse/>} />
          <Route path="/quantitychange" element={<Quantitychange/>} />
          <Route path="/sendEmail" element={<SendEmailer/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App