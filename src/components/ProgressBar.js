// import React from "react";
// import "./ProgressBar.css";

// const ProgressBar = () => {
//   const steps = [
//     "Preliminary",
//     "Your Details",
//     "KYC",
//     "Parties",
//     "Claim",
//     "Review",
//     "Payment",
//   ];
//   return (
//     <div className="progress-bar">
//       {steps.map((step, index) => (
//         <div key={index} className={`step ${index <= 2 ? "completed" : ""}`}>
//           <span>{`0${index + 1}`}</span>
//           <p>{step}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProgressBar;



// import React from "react";
// import "./ProgressBar.css";

// const ProgressBar = () => {
//   const steps = [
//     "Preliminary",
//     "Your Details",
//     "KYC",
//     "Parties",
//     "Claim",
//     "Review",
//     "Payment",
//   ];

//   const currentStep = 3; 

//   return (
//     <div className="progress-bar">
//       {steps.map((step, index) => (
//         <div
//           key={index}
//           className={`step ${index < currentStep ? "completed" : ""} ${
//             index === currentStep ? "active" : ""
//           }`}
//         >
//           <div className="circle">
//             {index < currentStep ? (
//               <span>&#10003;</span> // Checkmark for completed steps
//             ) : (
//               <span>{index + 1}</span>
//             )}
//           </div>
//           <p className="step-text">{step}</p>
//           {index < steps.length - 1 && <div className="line"></div>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProgressBar;



// import React from "react";
// import "./ProgressBar.css";

// const ProgressBar = () => {
//   const steps = [
//     "Preliminary",
//     "Your Details",
//     "KYC",
//     "Parties",
//     "Claim",
//     "Review",
//     "Payment",
//   ];

//   const currentStep = 3; // Active step is 4th (index 3)

//   return (
//     <div className="progress-bar">
//       {steps.map((step, index) => (
//         <div
//           key={index}
//           className={`step ${index < currentStep ? "completed" : ""} ${
//             index === currentStep ? "active" : ""
//           }`}
//         >
//           <div className="circle">
//             {index < currentStep ? (
//               <span>&#10003;</span> // Checkmark for completed steps
//             ) : (
//               <span>{index + 1}</span>
//             )}
//           </div>
//           <p className="step-text">{step}</p>
//           {index < steps.length - 1 && <div className="line"></div>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProgressBar;

  



import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const steps = [
    "Preliminary",
    "Your Details",
    "KYC",
    "Parties",
    "Claim",
    "Review",
    "Payment",
  ];

  const currentStep = 3; // Active step is 4th (index 3)

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index < currentStep ? "completed" : ""} ${
            index === currentStep ? "active" : ""
          }`}
        >
          <div className="circle">
            {index < currentStep ? (
              <span>&#10003;</span> // Checkmark for completed steps
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
          <p className="step-text">{step}</p>
          {index < steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
