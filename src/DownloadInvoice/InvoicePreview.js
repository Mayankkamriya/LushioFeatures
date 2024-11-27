import React from "react";
import "./InvoicePreview.css";

const InvoicePreview = ({ data }) => {
  const { clientName, invoiceNumber, date, items, totalAmount } = data;

  return (
    <div id="invoice-preview" className="invoice-preview">
      <header>
        <h1>INVOICE</h1>
        <div className="invoice-details">
          <p><strong>Invoice No:</strong> {invoiceNumber || 'N/A'}</p>
          <p><strong>Date:</strong> {date || 'N/A'}</p>
        </div>
      </header>

      <section className="client-details">
        <p><strong>Client Name:</strong> {clientName || 'N/A'}</p>
      </section>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description || "N/A"}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"><strong>Grand Total</strong></td>
            <td>${totalAmount.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoicePreview;
