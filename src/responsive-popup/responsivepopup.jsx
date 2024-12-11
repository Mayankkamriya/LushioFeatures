import React from "react";
import "./responsivepopup.css";

const ResponsivePopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Do not render anything if not open

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button className="close-popup-button" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default ResponsivePopup;




// import React, { useState } from "react";
// import "./responsivepopup.css";

// const ResponsivePopup = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   // Open popup
//   const openPopup = () => {
//     setPopupVisible(true);
//   };

//   // Close popup
//   const closePopup = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <div className="responsive-popup-container">
//       {/* Button to trigger popup */}
//       <button className="open-popup-button" onClick={openPopup}>
//         Open Responsive Popup
//       </button>

//       {/* Popup */}
//       {isPopupVisible && (
//         <div className="popup-overlay" onClick={closePopup}>
//           <div
//             className="popup-content"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//           >
//             <button className="close-popup-button" onClick={closePopup}>
//               ✖
//             </button>
//             <h1>Hello</h1>
//             <p>This is a responsive popup. lorem50</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResponsivePopup;

