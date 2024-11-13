// import React, { useState } from "react";
// import "./FillStar.css";

// const FillStar = () => {
//   const [review, setReview] = useState(0); // State for review input

//   const handleReviewChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) value = 0;
//     if (value > 5) value = 5;
//     setReview(value);
//   };

//   // Calculate the fill percentage for the one star (from 0% to 100%)
//   const getFillPercentage = (review) => {
//     return (review / 5) * 100; // Convert review (1 to 5) to percentage (0 to 100)
//   };

//   return (
//     <div className="fillstar-container">
//       <h3>Provide a review value (0 to 5):</h3>
//       <input
//         type="number"
//         value={review}
//         onChange={handleReviewChange}
//         step="0.1"
//         min="0"
//         max="5"
//       />

//       {/* Star Display */}
//       <div className="star-rating">
//         <div className="star-container">
//           <div className="star-background">★</div>
//           <div
//             className="star-fill"
//             style={{ width: `${getFillPercentage(review)}%` }}
//           >
//             ★
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FillStar;





// import React, { useState } from "react";
// import "./FillStar.css";

// const FillStar = () => {
//   const [review, setReview] = useState(0); // State for review input

//   const handleReviewChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) value = 0;
//     if (value > 5) value = 5;
//     setReview(value);
//   };

//   // Calculate fill percentage based on the review value (1 to 5)
//   const getFillPercentage = (review) => {
//     return (review / 5) * 100; // Convert review to percentage (out of 5)
//   };

//   return (
//     <div className="fillstar-container">
//       <h3>Provide a review value (1.0 to 5.0):</h3>
//       <input
//         type="number"
//         value={review}
//         onChange={handleReviewChange}
//         step="0.1"
//         min="0"
//         max="5"
//       />

//       {/* Star Display */}
//       <div className="star-container">
//         <div className="star" style={{ '--fill': `${getFillPercentage(review)}%` }}></div>
//       </div>
//     </div>
//   );
// };

// export default FillStar;







import React, { useState } from "react";
import "./FillStar.css"; // Create this CSS file for styling

const FillStar = () => {
  const [review, setReview] = useState(0); // State for review input

  const handleReviewChange = (e) => {
    let value = parseFloat(e.target.value);
    if (value < 0) value = 0;
    if (value > 5) value = 5;
    setReview(value);
  };

  return (
    <div className="fillstar-container">
      <h3>Provide a review value (1 to 5):</h3>
      <input
        type="number"
        value={review}
        onChange={handleReviewChange}
        step="0.1"
        min="0"
        max="5"
      />

      {/* Star Rating Display */}
      <div className="star-rating">
        {[...Array(1)].map((_, index) => {
          const fillPercentage = Math.min(Math.max(review/5 , 0), 1) * 100;
          return (
            <div key={index} className="star-container">

              <div className="star-background">★</div>
              <div
                className="star-fill"
                style={{ width: `${fillPercentage*0.8}%` }}
              >
                ★
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FillStar;
