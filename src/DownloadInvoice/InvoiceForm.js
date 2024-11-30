import React from "react";
import "./InvoiceForm.css";

const InvoiceForm = ({ invoiceData, setInvoiceData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  return (
    <form className="invoice-form">
      <h2>Invoice Form</h2>

      <div className="form-group">
        <label>Client Name: </label>
        <input
          type="text"
          name="clientName"
          value={invoiceData.clientName}
          onChange={handleChange}
          placeholder="Enter client name"
        />
      </div>

      <div className="form-group">
        <label>Invoice Number:</label>
        <input
          type="text"
          name="invoiceNumber"
          value={invoiceData.invoiceNumber}
          onChange={handleChange}
          placeholder="Enter invoice number"
        />
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={invoiceData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Ship_To</label>
        <input
          type="text"
          name="Ship_To"
          value={invoiceData.Ship_To}
          onChange={handleChange}
          placeholder="Enter Ship_To Name"
        />
      </div>
    </form>
  );
};

export default InvoiceForm;
