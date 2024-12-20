// import React, { useState } from "react";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     if (!formData.contractValue || !formData.claimValue) {
//       alert("Please fill all fields.");
//     } else {
//       console.log(formData);
//     }
//   };
  

//   return (
//     <div className="claim-form">
//       <h3>File your Claim</h3>
//       <div className="form-group">
//         <label>Contract Value</label>
//         <input
//           type="text"
//           name="contractValue"
//           value={formData.contractValue}
//           onChange={handleInputChange}
//           placeholder="Enter Contract Value"
//         />
//       </div>
//       <div className="form-group">
//         <label>Claim Value</label>
//         <input
//           type="text"
//           name="claimValue"
//           value={formData.claimValue}
//           onChange={handleInputChange}
//           placeholder="Enter Claim Value"
//         />
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;

// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">File your Claim</h3>

//       <div className="form-section">
//         {/* Claim Value Section */}
//         <div className="form-row">
//           <div className="form-group">
//             <label>
//               <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//               Contract Value
//             </label>
//             <input
//               type="text"
//               name="contractValue"
//               value={formData.contractValue}
//               onChange={handleInputChange}
//               placeholder="Enter Contract Value"
//             />
//           </div>
//           <div className="form-group">
//             <label>
//               <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//               Claim Value
//             </label>
//             <input
//               type="text"
//               name="claimValue"
//               value={formData.claimValue}
//               onChange={handleInputChange}
//               placeholder="Enter Claim Value"
//             />
//           </div>
//         </div>

//         {/* Place Section */}
//         <div className="form-row">
//           <div className="form-group">
//             <label>
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
//               Place
//             </label>
//             <input
//               type="text"
//               name="place"
//               value={formData.place}
//               onChange={handleInputChange}
//               placeholder="Enter Place"
//             />
//           </div>
//           <div className="form-group">
//             <label>
//               <FontAwesomeIcon icon={faLanguage} className="form-icon" />
//               Language
//             </label>
//             <input
//               type="text"
//               name="language"
//               value={formData.language}
//               onChange={handleInputChange}
//               placeholder="Enter Language"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <div className="claim-heading">
//         <h3>File your Claim</h3>
//         <p className="sub-heading">Approx 5 Minutes</p>
//       </div>

//       {/* Form Sections */}
//       <div className="form-wrapper">
//         {/* Claim Value */}
//         <div className="form-group">
//           <label>
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" /> Contract Value
//           </label>
//           <input
//             type="text"
//             name="contractValue"
//             value={formData.contractValue}
//             onChange={handleInputChange}
//             placeholder="10,00,00 USD"
//           />
//         </div>

//         <div className="form-group">
//           <label>
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" /> Claim Value
//           </label>
//           <input
//             type="text"
//             name="claimValue"
//             value={formData.claimValue}
//             onChange={handleInputChange}
//             placeholder="15,00,00 USD"
//           />
//         </div>

//         {/* Place */}
//         <div className="form-group">
//           <label>
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Place
//           </label>
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleInputChange}
//             placeholder="Enter Place"
//           />
//         </div>

//         {/* Language */}
//         <div className="form-group">
//           <label>
//             <FontAwesomeIcon icon={faLanguage} className="icon" /> Language
//           </label>
//           <input
//             type="text"
//             name="language"
//             value={formData.language}
//             onChange={handleInputChange}
//             placeholder="Enter Language"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;


// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
// } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">
//         File your Claim. <span className="claim-subtext">(Approx 5 Minutes)</span>
//       </h3>
//       <div className="form-sections">
//         {/* Claim Value Section */}
//         <div className="form-group">
//           <h4>
//             <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//             Claim Value
//           </h4>
//           <div className="form-input-row">
//             <div className="form-input">
//               <label>Contract Value</label>
//               <input
//                 type="text"
//                 name="contractValue"
//                 value={formData.contractValue}
//                 onChange={handleInputChange}
//                 placeholder="10,00,00"
//               />
//             </div>
//             <div className="form-input">
//               <label>Claim Value</label>
//               <input
//                 type="text"
//                 name="claimValue"
//                 value={formData.claimValue}
//                 onChange={handleInputChange}
//                 placeholder="15,00,00"
//               />
//               <small className="percentage-text">150% of Contract Value</small>
//             </div>
//           </div>
//         </div>

//         {/* Place Section */}
//         <div className="form-group">
//           <h4>
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
//             Place
//           </h4>
//           <div className="form-input">
//             <input
//               type="text"
//               name="place"
//               value={formData.place}
//               onChange={handleInputChange}
//               placeholder="Select the Place for proceedings"
//             />
//             <p className="helper-text">
//               Is the place for the proceedings the one mentioned in the
//               agreement? <span className="radio-options">Yes ⭕ No</span>
//             </p>
//           </div>
//         </div>

//         {/* Language Section */}
//         <div className="form-group">
//           <h4>
//             <FontAwesomeIcon icon={faLanguage} className="form-icon" />
//             Language
//           </h4>
//           <div className="form-input">
//             <input
//               type="text"
//               name="language"
//               value={formData.language}
//               onChange={handleInputChange}
//               placeholder="Select the language for proceedings"
//             />
//             <p className="helper-text">
//               Is the language for the proceedings the one mentioned in the
//               agreement? <span className="radio-options">Yes  No</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;

// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">
//         File your Claim. <span className="sub-heading">(Approx 5 Minutes)</span>
//       </h3>

//       <div className="form-row">
//         {/* Claim Value Section */}
//         <div className="form-group">
//           <label className="form-label">
//             <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//             Claim Value
//           </label>
//           <input
//             type="text"
//             name="contractValue"
//             value={formData.contractValue}
//             onChange={handleInputChange}
//             placeholder="Enter Contract Value"
//             className="form-input"
//           />
//           <span className="currency">USD</span>
//         </div>

//         {/* Place Section */}
//         <div className="form-group">
//           <label className="form-label">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
//             Place
//           </label>
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleInputChange}
//             placeholder="Select the Place for proceedings"
//             className="form-input"
//           />
//           <div className="form-note">Is the place in the agreement? Yes / No</div>
//         </div>

//         {/* Language Section */}
//         <div className="form-group">
//           <label className="form-label">
//             <FontAwesomeIcon icon={faLanguage} className="form-icon" />
//             Language
//           </label>
//           <input
//             type="text"
//             name="language"
//             value={formData.language}
//             onChange={handleInputChange}
//             placeholder="Select the language for proceedings"
//             className="form-input"
//           />
//           <div className="form-note">Is the language in the agreement? Yes / No</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;






// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <div className="claim-form-header">
//         <h3>File your Claim. <span className="header-time">(Approx 5 Minutes)</span></h3>
//       </div>

//       <div className="claim-section">
//         {/* Claim Value */}
//         <div className="claim-group">
//           <h4>
//             <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//             Claim Value
//           </h4>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input
//               type="text"
//               name="contractValue"
//               value={formData.contractValue}
//               onChange={handleInputChange}
//               placeholder="10,00,00"
//             />
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input
//               type="text"
//               name="claimValue"
//               value={formData.claimValue}
//               onChange={handleInputChange}
//               placeholder="15,00,00"
//             />
//             <p className="percentage">150% of Contract Value</p>
//           </div>
//         </div>

//         {/* Place */}
//         <div className="claim-group">
//           <h4>
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
//             Place
//           </h4>
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleInputChange}
//             placeholder="Select the Place for proceedings"
//             className="input-box"
//           />
//           <p className="subtext">Is the place in the agreement? <span>Yes</span> / <span>No</span></p>
//         </div>

//         {/* Language */}
//         <div className="claim-group">
//           <h4>
//             <FontAwesomeIcon icon={faLanguage} className="form-icon" />
//             Language
//           </h4>
//           <input
//             type="text"
//             name="language"
//             value={formData.language}
//             onChange={handleInputChange}
//             placeholder="Select the language for proceedings"
//             className="input-box"
//           />
//           <p className="subtext">Is the language in the agreement? <span>Yes</span> / <span>No</span></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;


// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
// } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>

//       <div className="form-sections">
//         {/* Claim Value Section */}
//         <div className="form-box">
//           <div className="form-box-header">
//             <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="form-input-group">
//             <div className="form-group">
//               <label>Contract Value</label>
//               <input
//                 type="text"
//                 name="contractValue"
//                 placeholder="10,00,00"
//                 value={formData.contractValue}
//                 onChange={handleInputChange}
//               />
//               <span className="currency">USD</span>
//             </div>
//             <div className="form-group">
//               <label>Claim Value</label>
//               <input
//                 type="text"
//                 name="claimValue"
//                 placeholder="15,00,00"
//                 value={formData.claimValue}
//                 onChange={handleInputChange}
//               />
//               <span className="currency">USD</span>
//             </div>
//           </div>
//           <p className="percentage-warning">150% of Contract Value</p>
//         </div>

//         {/* Place Section */}
//         <div className="form-box">
//           <div className="form-box-header">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
//             <h4>Place</h4>
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               name="place"
//               placeholder="Select the Place for proceedings"
//               value={formData.place}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="radio-group">
//             <p>Is the place in the agreement?</p>
//             <label>
//               <input type="radio" name="place-agreement" value="yes" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place-agreement" value="no" /> No
//             </label>
//           </div>
//         </div>

//         {/* Language Section */}
//         <div className="form-box">
//           <div className="form-box-header">
//             <FontAwesomeIcon icon={faLanguage} className="form-icon" />
//             <h4>Language</h4>
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               name="language"
//               placeholder="Select the language for proceedings"
//               value={formData.language}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="radio-group">
//             <p>Is the language in the agreement?</p>
//             <label>
//               <input type="radio" name="language-agreement" value="yes" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language-agreement" value="no" /> No
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
// } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>

//       <div className="form-grid">
//         {/* Claim Value Section */}
//         <div className="form-box">
//           <div className="form-header">
//             <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="form-inputs">
//             <div className="form-group">
//               <label>Contract Value</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="contractValue"
//                   placeholder="10,00,00"
//                   value={formData.contractValue}
//                   onChange={handleInputChange}
//                 />
//                 <span className="currency">USD</span>
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Claim Value</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="claimValue"
//                   placeholder="15,00,00"
//                   value={formData.claimValue}
//                   onChange={handleInputChange}
//                 />
//                 <span className="currency">USD</span>
//               </div>
//             </div>
//           </div>
//           <p className="percentage-warning">150% of Contract Value</p>
//         </div>

//         {/* Place Section */}
//         <div className="form-box">
//           <div className="form-header">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
//             <h4>Place</h4>
//           </div>
//           <input
//             type="text"
//             name="place"
//             placeholder="Select the Place for proceedings"
//             value={formData.place}
//             onChange={handleInputChange}
//           />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="placeAgreement" value="yes" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="placeAgreement" value="no" /> No
//             </label>
//           </div>
//         </div>

//         {/* Language Section */}
//         <div className="form-box">
//           <div className="form-header">
//             <FontAwesomeIcon icon={faLanguage} className="form-icon" />
//             <h4>Language</h4>
//           </div>
//           <input
//             type="text"
//             name="language"
//             placeholder="Select the language for proceedings"
//             value={formData.language}
//             onChange={handleInputChange}
//           />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="languageAgreement" value="yes" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="languageAgreement" value="no" /> No
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;


// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
//   faFileAlt,
//   faFileUpload,
//   faPlusCircle,
// } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>

//       {/* Top Section */}
//       <div className="form-grid">
//         <div className="form-box">
//           <div className="form-header">
//             <FontAwesomeIcon icon={faMoneyBill} className="form-icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="form-inputs">
//             <div className="form-group">
//               <label>Contract Value</label>
//               <div className="input-wrapper">
//                 <input type="text" placeholder="10,00,00" />
//                 <span className="currency">USD</span>
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Claim Value</label>
//               <div className="input-wrapper">
//                 <input type="text" placeholder="15,00,00" />
//                 <span className="currency">USD</span>
//               </div>
//             </div>
//           </div>
//           <p className="percentage-warning">150% of Contract Value</p>
//         </div>

//         <div className="form-box">
//           <div className="form-header">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="placeAgreement" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="placeAgreement" /> No
//             </label>
//           </div>
//         </div>

//         <div className="form-box">
//           <div className="form-header">
//             <FontAwesomeIcon icon={faLanguage} className="form-icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="languageAgreement" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="languageAgreement" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="lower-box">
//           <FontAwesomeIcon icon={faFileAlt} className="lower-icon" />
//           <h4>Statement</h4>
//           <p>Write your Statement Here</p>
//           <p className="or">or</p>
//           <div className="upload-btn">
//             <FontAwesomeIcon icon={faFileUpload} /> Upload a PDF
//           </div>
//         </div>

//         <div className="lower-box">
//           <FontAwesomeIcon icon={faFileAlt} className="lower-icon" />
//           <h4>Agreement under Disputes</h4>
//           <div className="upload-area">
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faFileUpload} />
//               <p>Upload the Contract</p>
//               <p className="file-limit">Max 2MB, PDF</p>
//             </div>
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faFileUpload} />
//               <p>Arbitration Agreement</p>
//               <p className="file-limit">Max 2MB, PDF</p>
//             </div>
//           </div>
//         </div>

//         <div className="lower-box">
//           <FontAwesomeIcon icon={faFileAlt} className="lower-icon" />
//           <h4>Additional Documentation</h4>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileUpload} />
//             <p>Upload the Contract</p>
//             <p className="file-limit">Max 2MB, PDF</p>
//           </div>
//           <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
//   faFileAlt,
//   faFileUpload,
//   faPlusCircle,
// } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">File your Claim <span>(Approx 5 Minutes)</span></h3>
//       <div className="upper-section">
//         {/* Claim Value */}
//         <div className="claim-box">
//           <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//           <h4>Claim Value</h4>
//           <div className="input-group">
//             <div className="input-item">
//               <p>Contract Value</p>
//               <input
//                 type="text"
//                 name="contractValue"
//                 value={formData.contractValue}
//                 onChange={handleInputChange}
//                 placeholder="Enter Contract Value"
//               />
//               <span className="currency">USD</span>
//             </div>
//             <div className="input-item">
//               <p>Claim Value</p>
//               <input
//                 type="text"
//                 name="claimValue"
//                 value={formData.claimValue}
//                 onChange={handleInputChange}
//                 placeholder="Enter Claim Value"
//               />
//               <span className="currency">USD</span>
//             </div>
//           </div>
//           <p className="note">150% of Contract Value</p>
//         </div>

//         {/* Place */}
//         <div className="claim-box">
//           <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//           <h4>Place</h4>
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleInputChange}
//             placeholder="Select the Place for proceedings"
//           />
//           <p>Is the place in the agreement? <span>Yes</span> / <span>No</span></p>
//         </div>

//         {/* Language */}
//         <div className="claim-box">
//           <FontAwesomeIcon icon={faLanguage} className="icon" />
//           <h4>Language</h4>
//           <input
//             type="text"
//             name="language"
//             value={formData.language}
//             onChange={handleInputChange}
//             placeholder="Select the language for proceedings"
//           />
//           <p>Is the language in the agreement? <span>Yes</span> / <span>No</span></p>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement */}
//         <div className="lower-box">
//           <FontAwesomeIcon icon={faFileAlt} className="lower-icon" />
//           <h4>Statement</h4>
//           <p>Write your Statement Here</p>
//           <p className="or">or</p>
//           <div className="upload-btn">
//             <FontAwesomeIcon icon={faFileUpload} /> Upload a PDF
//           </div>
//         </div>

//         {/* Agreement under Disputes */}
//         <div className="lower-box">
//           <FontAwesomeIcon icon={faFileAlt} className="lower-icon" />
//           <h4>Agreement under Disputes</h4>
//           <div className="upload-area">
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faFileUpload} />
//               <p>Upload the Contract</p>
//               <p className="file-limit">Max 2MB, PDF</p>
//             </div>
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faFileUpload} />
//               <p>Arbitration Agreement</p>
//               <p className="file-limit">Max 2MB, PDF</p>
//             </div>
//           </div>
//         </div>

//         {/* Additional Documentation */}
//         <div className="lower-box">
//           <FontAwesomeIcon icon={faFileAlt} className="lower-icon" />
//           <h4>Additional Documentation</h4>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileUpload} />
//             <p>Upload the Contract</p>
//             <p className="file-limit">Max 2MB, PDF</p>
//           </div>
//           <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;


// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
// } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>

//       {/* Upper Section */}
//       <div className="upper-section">
//         {/* Claim Value */}
//         <div className="claim-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <div className="input-item">
//               <label>Contract Value</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="contractValue"
//                   value={formData.contractValue}
//                   onChange={handleInputChange}
//                   placeholder="10,00,00"
//                 />
//                 <span>USD</span>
//               </div>
//             </div>
//             <div className="input-item">
//               <label>Claim Value</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="claimValue"
//                   value={formData.claimValue}
//                   onChange={handleInputChange}
//                   placeholder="15,00,00"
//                 />
//                 <span>USD</span>
//               </div>
//             </div>
//           </div>
//           <p className="note">150% of Contract Value</p>
//         </div>

//         {/* Place */}
//         <div className="claim-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="place"
//               value={formData.place}
//               onChange={handleInputChange}
//               placeholder="Select the Place for proceedings"
//             />
//           </div>
//           <p className="radio-text">
//             Is the place in the agreement?
//             <span className="radio">
//               <label>
//                 <input type="radio" name="placeAgreement" /> Yes
//               </label>
//               <label>
//                 <input type="radio" name="placeAgreement" /> No
//               </label>
//             </span>
//           </p>
//         </div>

//         {/* Language */}
//         <div className="claim-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="language"
//               value={formData.language}
//               onChange={handleInputChange}
//               placeholder="Select the language for proceedings"
//             />
//           </div>
//           <p className="radio-text">
//             Is the language in the agreement?
//             <span className="radio">
//               <label>
//                 <input type="radio" name="languageAgreement" /> Yes
//               </label>
//               <label>
//                 <input type="radio" name="languageAgreement" /> No
//               </label>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;




// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
//   faFileAlt,
//   faFileUpload,
//   faPlus,
// } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         {/* Claim Value */}
//         <div className="claim-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <div className="input-item">
//               <label>Contract Value</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="contractValue"
//                   value={formData.contractValue}
//                   onChange={handleInputChange}
//                   placeholder="10,00,00"
//                 />
//                 <span>USD</span>
//               </div>
//             </div>
//             <div className="input-item">
//               <label>Claim Value</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="claimValue"
//                   value={formData.claimValue}
//                   onChange={handleInputChange}
//                   placeholder="15,00,00"
//                 />
//                 <span>USD</span>
//               </div>
//             </div>
//           </div>
//           <p className="note">150% of Contract Value</p>
//         </div>

//         {/* Place */}
//         <div className="claim-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="place"
//               value={formData.place}
//               onChange={handleInputChange}
//               placeholder="Select the Place for proceedings"
//             />
//           </div>
//           <p className="radio-text">
//             Is the place in the agreement?
//             <span className="radio">
//               <label>
//                 <input type="radio" name="placeAgreement" /> Yes
//               </label>
//               <label>
//                 <input type="radio" name="placeAgreement" /> No
//               </label>
//             </span>
//           </p>
//         </div>

//         {/* Language */}
//         <div className="claim-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="language"
//               value={formData.language}
//               onChange={handleInputChange}
//               placeholder="Select the language for proceedings"
//             />
//           </div>
//           <p className="radio-text">
//             Is the language in the agreement?
//             <span className="radio">
//               <label>
//                 <input type="radio" name="languageAgreement" /> Yes
//               </label>
//               <label>
//                 <input type="radio" name="languageAgreement" /> No
//               </label>
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement */}
//         <div className="lower-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-box">
//             <p>Write your Statement Here</p>
//             <div className="upload-btn">
//               <FontAwesomeIcon icon={faFileUpload} className="upload-icon" />
//               <span>Upload a Pdf</span>
//             </div>
//           </div>
//         </div>

//         {/* Agreement under Disputes */}
//         <div className="lower-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-grid">
//             <div className="upload-item">
//               <FontAwesomeIcon icon={faFileUpload} className="upload-icon" />
//               <span>Upload the Contract</span>
//             </div>
//             <div className="upload-item">
//               <FontAwesomeIcon icon={faFileUpload} className="upload-icon" />
//               <span>Arbitration Agreement</span>
//             </div>
//           </div>
//         </div>

//         {/* Additional Documentation */}
//         <div className="lower-box">
//           <div className="icon-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-plus">
//             <FontAwesomeIcon icon={faFileUpload} className="upload-icon" />
//             <span>Upload the Contract</span>
//             <FontAwesomeIcon icon={faPlus} className="plus-icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileUpload } from "@fortawesome/free-solid-svg-icons";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       {/* File your Claim Header */}
//       <h3 className="claim-heading">
//         File your Claim. <span className="claim-subtitle">(Approx 5 Minutes)</span>
//       </h3>

//       {/* Upper Section */}
//       <div className="upper-section">
//         <div className="form-card">
//           <h4><FontAwesomeIcon icon={faMoneyBill} className="icon" /> Claim Value</h4>
//           <label>Contract Value</label>
//           <input
//             type="text"
//             name="contractValue"
//             value={formData.contractValue}
//             onChange={handleInputChange}
//             placeholder="Enter Contract Value"
//           />
//           <label>Claim Value</label>
//           <input
//             type="text"
//             name="claimValue"
//             value={formData.claimValue}
//             onChange={handleInputChange}
//             placeholder="Enter Claim Value"
//           />
//           <p className="highlighted-text">150% of Contract Value</p>
//         </div>

//         <div className="form-card">
//           <h4><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Place</h4>
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleInputChange}
//             placeholder="Select the Place for proceedings"
//           />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-buttons">
//             <label><input type="radio" name="placeAgreement" /> Yes</label>
//             <label><input type="radio" name="placeAgreement" /> No</label>
//           </div>
//         </div>

//         <div className="form-card">
//           <h4><FontAwesomeIcon icon={faLanguage} className="icon" /> Language</h4>
//           <input
//             type="text"
//             name="language"
//             value={formData.language}
//             onChange={handleInputChange}
//             placeholder="Select the language for proceedings"
//           />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-buttons">
//             <label><input type="radio" name="languageAgreement" /> Yes</label>
//             <label><input type="radio" name="languageAgreement" /> No</label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="form-card statement-card">
//           <h4><FontAwesomeIcon icon={faFileUpload} className="icon" /> Statement</h4>
//           <div className="upload-box">Write your Statement Here <br /> or <br /> Upload a PDF</div>
//         </div>
//         <div className="form-card">
//           <h4>Agreement under Disputes</h4>
//           <div className="upload-area">
//             <div className="upload-box">Upload the Contract <br /> Max 2MB, PDF</div>
//             <div className="upload-box">Arbitration Agreement <br /> Max 2MB, PDF</div>
//           </div>
//         </div>
//         <div className="form-card">
//           <h4>Additional Documentation</h4>
//           <div className="upload-box">Upload the Contract <br /> Max 2MB, PDF</div>
//           <div className="add-button">+</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;


// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileAlt } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//     isPlaceCorrect: null,
//     isLanguageCorrect: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">File your Claim. <span className="sub-text">(Approx 5 Minutes)</span></h3>

//       {/* Claim Value */}
//       <div className="claim-section">
//         <div className="form-card">
//           <h4><FontAwesomeIcon icon={faMoneyBill} /> Claim Value</h4>
//           <div className="form-input">
//             <label>Contract Value</label>
//             <input type="text" name="contractValue" placeholder="Enter Contract Value" />
//           </div>
//           <div className="form-input">
//             <label>Claim Value</label>
//             <input type="text" name="claimValue" placeholder="Enter Claim Value" />
//           </div>
//           <span className="highlight-text">150% of Contract Value</span>
//         </div>

//         {/* Place */}
//         <div className="form-card">
//           <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Place</h4>
//           <div className="form-input">
//             <input type="text" name="place" placeholder="Select the Place for proceedings" />
//           </div>
//           <div className="yes-no-container">
//             <p>Is the place in the agreement?</p>
//             <label className="radio-button">
//               <input type="radio" name="isPlaceCorrect" value="yes" />
//               <span className="radio-custom"></span> Yes
//             </label>
//             <label className="radio-button">
//               <input type="radio" name="isPlaceCorrect" value="no" />
//               <span className="radio-custom"></span> No
//             </label>
//           </div>
//         </div>

//         {/* Language */}
//         <div className="form-card">
//           <h4><FontAwesomeIcon icon={faLanguage} /> Language</h4>
//           <div className="form-input">
//             <input type="text" name="language" placeholder="Select the language for proceedings" />
//           </div>
//           <div className="yes-no-container">
//             <p>Is the language in the agreement?</p>
//             <label className="radio-button">
//               <input type="radio" name="isLanguageCorrect" value="yes" />
//               <span className="radio-custom"></span> Yes
//             </label>
//             <label className="radio-button">
//               <input type="radio" name="isLanguageCorrect" value="no" />
//               <span className="radio-custom"></span> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Statement, Agreement under Disputes, Additional Documents */}
//       <div className="lower-section">
//         <div className="form-card statement-card">
//           <h4><FontAwesomeIcon icon={faFileAlt} /> Statement</h4>
//           <p>Write your Statement Here</p>
//           <button>Upload a PDF</button>
//         </div>

//         <div className="form-card dispute-card">
//           <h4>Agreement under Disputes</h4>
//           <div className="upload-box">Upload the Contract</div>
//           <div className="upload-box">Arbitration Agreement</div>
//         </div>

//         <div className="form-card doc-card">
//           <h4>Additional Documentation</h4>
//           <div className="upload-box">Upload the Contract</div>
//           <div className="add-box">+</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;





// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//     placeAgreement: "",
//     languageAgreement: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="form-title">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>

//       <div className="upper-section">
//         {/* Claim Value */}
//         <div className="section-box">
//           <h4>
//             <FontAwesomeIcon icon={faMoneyBill} className="form-icon" /> Claim Value
//           </h4>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <div className="input-container">
//               <input
//                 type="text"
//                 name="contractValue"
//                 value={formData.contractValue}
//                 onChange={handleInputChange}
//                 placeholder="Enter Contract Value"
//               />
//               <span>USD</span>
//             </div>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <div className="input-container">
//               <input
//                 type="text"
//                 name="claimValue"
//                 value={formData.claimValue}
//                 onChange={handleInputChange}
//                 placeholder="Enter Claim Value"
//               />
//               <span>USD</span>
//             </div>
//           </div>
//           <p className="highlight-text">150% of Contract Value</p>
//         </div>

//         {/* Place */}
//         <div className="section-box">
//           <h4>
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="form-icon" /> Place
//           </h4>
//           <div className="input-group">
//             <input
//               type="text"
//               name="place"
//               value={formData.place}
//               onChange={handleInputChange}
//               placeholder="Select the Place for proceedings"
//             />
//           </div>
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="placeAgreement" value="yes" onChange={handleInputChange} /> Yes
//             </label>
//             <label>
//               <input type="radio" name="placeAgreement" value="no" onChange={handleInputChange} /> No
//             </label>
//           </div>
//         </div>

//         {/* Language */}
//         <div className="section-box">
//           <h4>
//             <FontAwesomeIcon icon={faLanguage} className="form-icon" /> Language
//           </h4>
//           <div className="input-group">
//             <input
//               type="text"
//               name="language"
//               value={formData.language}
//               onChange={handleInputChange}
//               placeholder="Select the language for proceedings"
//             />
//           </div>
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="languageAgreement" value="yes" onChange={handleInputChange} /> Yes
//             </label>
//             <label>
//               <input type="radio" name="languageAgreement" value="no" onChange={handleInputChange} /> No
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React, { useState } from "react";
// import "./ClaimForm.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";

// const ClaimForm = () => {
//   const [formData, setFormData] = useState({
//     contractValue: "",
//     claimValue: "",
//     place: "",
//     language: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">File your Claim. <span>(Approx 5 Minutes)</span></h3>

//       <div className="upper-section">
//         {/* Claim Value */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input
//               type="text"
//               name="contractValue"
//               placeholder="Enter Contract Value"
//               value={formData.contractValue}
//               onChange={handleInputChange}
//             />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input
//               type="text"
//               name="claimValue"
//               placeholder="Enter Claim Value"
//               value={formData.claimValue}
//               onChange={handleInputChange}
//             />
//             <span className="currency">USD</span>
//           </div>
//           <p className="percentage">150% of Contract Value</p>
//         </div>

//         {/* Place */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input
//             type="text"
//             name="place"
//             placeholder="Select the Place for proceedings"
//             value={formData.place}
//             onChange={handleInputChange}
//           />
//           <p className="radio-label">Is the place in the agreement?</p>
//           <div className="radio-buttons">
//             <label>
//               <input type="radio" name="placeAgreement" value="Yes" />
//               Yes
//             </label>
//             <label>
//               <input type="radio" name="placeAgreement" value="No" />
//               No
//             </label>
//           </div>
//         </div>

//         {/* Language */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input
//             type="text"
//             name="language"
//             placeholder="Select the language for proceedings"
//             value={formData.language}
//             onChange={handleInputChange}
//           />
//           <p className="radio-label">Is the language in the agreement?</p>
//           <div className="radio-buttons">
//             <label>
//               <input type="radio" name="languageAgreement" value="Yes" />
//               Yes
//             </label>
//             <label>
//               <input type="radio" name="languageAgreement" value="No" />
//               No
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoneyBill, faMapMarkerAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       <h3 className="claim-heading">
//         File your Claim. <span className="sub-heading">(Approx 5 Minutes)</span>
//       </h3>

//       {/* Upper Section */}
//       <div className="upper-section">
//         {/* Claim Value Section */}
//         <div className="section-box">
//           <h4>
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" /> Claim Value
//           </h4>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         {/* Place Section */}
//         <div className="section-box">
//           <h4>
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Place
//           </h4>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <label>
//             <input type="radio" name="place" /> Yes
//           </label>
//           <label>
//             <input type="radio" name="place" /> No
//           </label>
//         </div>

//         {/* Language Section */}
//         <div className="section-box">
//           <h4>
//             <FontAwesomeIcon icon={faLanguage} className="icon" /> Language
//           </h4>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <label>
//             <input type="radio" name="language" /> Yes
//           </label>
//           <label>
//             <input type="radio" name="language" /> No
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;


// import React from "react";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css"; // Assuming you already have CSS for styling

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <p>Arbitration Agreement</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;






// import React from "react";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement Section */}
//         <div className="section-box statement-section">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="statement-area">
//             <textarea
//               className="statement-input"
//               placeholder="Write your statement here..."
//             ></textarea>
//             <p>or</p>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <p>Arbitration Agreement</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;


// import React from "react";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
//   faFileAlt,
//   faPlus,
//   faCloudUploadAlt, // for the upload icons
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <textarea
//               placeholder="Write your statement here..."
//               className="statement-textarea"
//             ></textarea>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         {/* Agreement under Disputes Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-grid">
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
//               <p>Upload the Contract</p>
//               <span>Max 2MB, PDF</span>
//             </div>
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
//               <p>Arbitration Agreement</p>
//               <span>Max 2MB, PDF</span>
//             </div>
//           </div>
//         </div>

//         {/* Additional Documentation Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React from "react";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
//   faFileAlt,
//   faPlus,
//   faCloudUploadAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <textarea
//               placeholder="Write your statement here..."
//               className="statement-textarea"
//             ></textarea>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         {/* Agreement under Disputes Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-area">
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
//               <p>Upload the Contract</p>
//               <span>Max 2MB, PDF</span>
//             </div>
//             <div className="upload-box">
//               <FontAwesomeIcon icon={faCloudUploadAlt} className="upload-icon" />
//               <p>Arbitration Agreement</p>
//               <span>Max 2MB, PDF</span>
//             </div>
//           </div>
//         </div>

//         {/* Additional Documentation Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;






// import React from "react";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
//   faFileAlt,
//   faPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input
//             type="text"
//             placeholder="Select the language for proceedings"
//           />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement Section */}
//         <div className="section-box statement-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         {/* Agreement under Disputes Section */}
//         <div className="section-box agreement-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileAlt} className="upload-icon" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileAlt} className="upload-icon" />
//             <p>Arbitration Agreement</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         {/* Additional Documentation Section */}
//         <div className="section-box additional-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileAlt} className="upload-icon" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;





// import React from "react";
// import {
//   faMoneyBill,
//   faMapMarkerAlt,
//   faLanguage,
//   faFileAlt,
//   faPlus,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         {/* Claim Value Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="claim-value-container">
//             <div className="input-group">
//               <label>Contract Value</label>
//               <div className="input-with-unit">
//                 <input type="text" placeholder="Enter Contract Value" />
//                 <span className="currency">USD</span>
//               </div>
//             </div>
//             <div className="input-group">
//               <label>Claim Value</label>
//               <div className="input-with-unit">
//                 <input type="text" placeholder="Enter Claim Value" />
//                 <span className="currency">USD</span>
//               </div>
//             </div>
//             <span className="percentage">150% of Contract Value</span>
//           </div>
//         </div>

//         {/* Place Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         {/* Language Section */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input
//             type="text"
//             placeholder="Select the language for proceedings"
//           />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement Section */}
//         <div className="section-box statement-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         {/* Agreement under Disputes Section */}
//         <div className="section-box agreement-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileAlt} className="upload-icon" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileAlt} className="upload-icon" />
//             <p>Arbitration Agreement</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         {/* Additional Documentation Section */}
//         <div className="section-box additional-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <FontAwesomeIcon icon={faFileAlt} className="upload-icon" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;



// import React from "react";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import FileUpload from "./FileUpload";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <FileUpload label="Upload a PDF" />
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <FileUpload label="Upload the Contract" />
//           <FileUpload label="Arbitration Agreement" />
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <FileUpload label="Upload the Contract" />
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;








// import React from "react";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css"; // Assuming you already have CSS for styling

// const ClaimForm = () => {
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       alert(`File uploaded: ${file.name}`);
//     }
//   };

//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">
//               <input
//                 type="file"
//                 accept=".pdf"
//                 style={{ display: "none" }}
//                 onChange={handleFileUpload}
//               />
//               Upload a PDF
//             </button>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <label className="file-label">
//               Upload the Contract
//               <input type="file" accept=".pdf" onChange={handleFileUpload} />
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <label className="file-label">
//               Arbitration Agreement
//               <input type="file" accept=".pdf" onChange={handleFileUpload} />
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <label className="file-label">
//               Upload the Contract
//               <input type="file" accept=".pdf" onChange={handleFileUpload} />
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;





// import React from "react";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       alert(`File uploaded: ${file.name}`);
//     }
//   };

//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">
//               <input
//                 type="file"
//                 accept=".pdf"
//                 style={{ display: "none" }}
//                 onChange={handleFileUpload}
//               />
//               Upload a PDF
//             </button>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <label className="file-label">
//               <input type="file" accept=".pdf" onChange={handleFileUpload} />
//               Upload the Contract
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <label className="file-label">
//               <input type="file" accept=".pdf" onChange={handleFileUpload} />
//               Arbitration Agreement
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <label className="file-label">
//               <input type="file" accept=".pdf" onChange={handleFileUpload} />
//               Upload the Contract
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;





// import React from "react";
// import { faMoneyBill, faMapMarkerAlt, faLanguage, faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       alert(`File uploaded: ${file.name}`);
//     }
//   };

//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <h3 className="claim-heading">
//         File your Claim. <span>(Approx 5 Minutes)</span>
//       </h3>
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMoneyBill} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faLanguage} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">
//               <input
//                 type="file"
//                 accept=".pdf"
//                 style={{ display: "none" }}
//                 onChange={handleFileUpload}
//               />
//               Upload a PDF
//             </button>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <label>
//               Upload the Contract
//               <input type="file" onChange={handleFileUpload} />
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <label>
//               Arbitration Agreement
//               <input type="file" onChange={handleFileUpload} />
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <label>
//               Upload the Contract
//               <input type="file" onChange={handleFileUpload} />
//             </label>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;






// import React from "react";
// import { faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <div className="upper-section">
//         {/* Claim Value */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         {/* Place */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         {/* Language */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         {/* Statement */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         {/* Agreement under Disputes */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Arbitration Agreement</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         {/* Additional Documentation */}
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;




// import React from "react";
// import { faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Arbitration Agreement</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;






// import React from "react";
// import { faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./ClaimForm.css";

// const ClaimForm = () => {
//   return (
//     <div className="claim-form-container">
//       {/* Upper Section */}
//       <div className="upper-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Claim Value</h4>
//           </div>
//           <div className="input-group">
//             <label>Contract Value</label>
//             <input type="text" placeholder="Enter Contract Value" />
//             <span className="currency">USD</span>
//           </div>
//           <div className="input-group">
//             <label>Claim Value</label>
//             <input type="text" placeholder="Enter Claim Value" />
//             <span className="currency">USD</span>
//           </div>
//           <span className="percentage">150% of Contract Value</span>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Place</h4>
//           </div>
//           <input type="text" placeholder="Select the Place for proceedings" />
//           <p>Is the place in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="place" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="place" /> No
//             </label>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Language</h4>
//           </div>
//           <input type="text" placeholder="Select the language for proceedings" />
//           <p>Is the language in the agreement?</p>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="language" /> Yes
//             </label>
//             <label>
//               <input type="radio" name="language" /> No
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="lower-section">
//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Statement</h4>
//           </div>
//           <div className="upload-area">
//             <p>Write your Statement Here</p>
//             <span>or</span>
//             <button className="upload-btn">Upload a PDF</button>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faFileAlt} className="icon" />
//             <h4>Agreement under Disputes</h4>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Arbitration Agreement</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//         </div>

//         <div className="section-box">
//           <div className="section-heading">
//             <FontAwesomeIcon icon={faPlus} className="icon" />
//             <h4>Additional Documentation</h4>
//           </div>
//           <div className="upload-box">
//             <input type="file" />
//             <p>Upload the Contract</p>
//             <span>Max 2MB, PDF</span>
//           </div>
//           <button className="add-btn">+</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimForm;




import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faMapMarkerAlt,
  faLanguage,
  faCommentDots,
  faHandshake,
  faFileUpload,
} from "@fortawesome/free-solid-svg-icons";
import "./ClaimForm.css";

const ClaimForm = () => {
  return (
    <div className="claim-form-container">
      {/* Upper Section */}
      <div className="upper-section">
        <div className="section-box">
          <div className="section-heading">
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            <h4>Claim Value</h4>
          </div>
          <div className="input-group">
            <label>Contract Value</label>
            <input type="text" placeholder="Enter Contract Value" />
            <span className="currency">USD</span>
          </div>
          <div className="input-group">
            <label>Claim Value</label>
            <input type="text" placeholder="Enter Claim Value" />
            <span className="currency">USD</span>
          </div>
          <span className="percentage">150% of Contract Value</span>
        </div>

        <div className="section-box">
          <div className="section-heading">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <h4>Place</h4>
          </div>
          <input type="text" placeholder="Select the Place for proceedings" />
          <p>Is the place in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="place" /> Yes
            </label>
            <label>
              <input type="radio" name="place" /> No
            </label>
          </div>
        </div>

        <div className="section-box">
          <div className="section-heading">
            <FontAwesomeIcon icon={faLanguage} className="icon" />
            <h4>Language</h4>
          </div>
          <input type="text" placeholder="Select the language for proceedings" />
          <p>Is the language in the agreement?</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="language" /> Yes
            </label>
            <label>
              <input type="radio" name="language" /> No
            </label>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="lower-section">
        <div className="section-box">
          <div className="section-heading">
            <FontAwesomeIcon icon={faCommentDots} className="icon" />
            <h4>Statement</h4>
          </div>
          <div className="upload-area">
            <p>Write your Statement Here</p>
            <span>or</span>
            <button className="upload-btn">Upload a PDF</button>
          </div>
        </div>

        <div className="section-box">
          <div className="section-heading">
            <FontAwesomeIcon icon={faHandshake} className="icon" />
            <h4>Agreement under Disputes</h4>
          </div>
          <div className="upload-box">
            <input type="file" />
            <p>Upload the Contract</p>
            <span>Max 2MB, PDF</span>
          </div>
          <div className="upload-box">
            <input type="file" />
            <p>Arbitration Agreement</p>
            <span>Max 2MB, PDF</span>
          </div>
        </div>

        <div className="section-box">
          <div className="section-heading">
            <FontAwesomeIcon icon={faFileUpload} className="icon" />
            <h4>Additional Documentation</h4>
          </div>
          <div className="upload-box">
            <input type="file" />
            <p>Upload the Contract</p>
            <span>Max 2MB, PDF</span>
          </div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
