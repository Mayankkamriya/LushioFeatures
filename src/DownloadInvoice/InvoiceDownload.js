import React, { useState } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoicePreview from "./InvoicePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoiceDownload = () => {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "",
    invoiceNumber: "",
    date: "",
    items: [{ description: "", quantity: 1, price: 0 }],
    totalAmount: 0,
  });

  // Function to generate and download PDF
  const downloadPDF = () => {
    const invoiceElement = document.getElementById("invoice-preview");
    html2canvas(invoiceElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save(`Invoice_${invoiceData.invoiceNumber}.pdf`);
    });
  };

  return (
    <div>
      <h1>Download Invoice</h1>
      <InvoiceForm invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
      <InvoicePreview data={invoiceData} />
      <button onClick={downloadPDF} style={buttonStyle}>
        Download PDF
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default InvoiceDownload;
