// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";


// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h2>Jur</h2>
//       <ul>
//         <li>
//           <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//           Dashboard
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFolder} className="icon" />
//           My Cases
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faTasks} className="icon" />
//           Activities
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faCalendar} className="icon" />
//           Calendar
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFile} className="icon" />
//           Files
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faGavel} className="icon" />
//           Open a Dispute
//         </li>
//       </ul>
//       <div className="cta">
//         <p>Get Justice on every Claim</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// ye code copy krke bol dio ki and take icons from favicins

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
//   faScaleBalanced, // Add this for "Jur"
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       {/* Jur with Icon */}
//       <h2>
//         <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
//         Jur
//       </h2>
//       <ul>
//         <li>
//           <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//           Dashboard
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFolder} className="icon" />
//           My Cases
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faTasks} className="icon" />
//           Activities
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faCalendar} className="icon" />
//           Calendar
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFile} className="icon" />
//           Files
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faGavel} className="icon" />
//           Open a Dispute
//         </li>
//       </ul>
//       <div className="cta">
//         <p>Get Justice on every Claim</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
//   faScaleBalanced,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       {/* Jur with Icon */}
//       <h2>
//         <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
//         Jur
//       </h2>
//       <ul>
//         <li>
//           <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//           Dashboard
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFolder} className="icon" />
//           My Cases
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faTasks} className="icon" />
//           Activities
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faCalendar} className="icon" />
//           Calendar
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFile} className="icon" />
//           Files
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faGavel} className="icon" />
//           Open a Dispute
//         </li>
//       </ul>
//       <div className="cta">
//         <p>Get Justice on every Claim</p>
//         {/* Image Added Here */}
//         <img
//           src={process.env.PUBLIC_URL + "/download (3).jpeg"}
//           alt="Justice Illustration"
//           className="cta-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button className="navbar-toggle" onClick={toggleNavbar}>
//         {isOpen ? "Close" : "Menu"}
//       </button>
//       <div className={`navbar ${isOpen ? "open" : ""}`}>
//         {/* Jur Heading */}
//         <h2>
//           <FontAwesomeIcon icon={faGavel} className="jur-icon" />
//           Jur
//         </h2>

//         {/* Navigation Menu */}
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//             Dashboard
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFolder} className="icon" />
//             My Cases
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faTasks} className="icon" />
//             Activities
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCalendar} className="icon" />
//             Calendar
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFile} className="icon" />
//             Files
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faGavel} className="icon" />
//             Open a Dispute
//           </li>
//         </ul>

//         {/* Bottom CTA Section */}
//         <div className="cta">
//           <p>Get Justice on every Claim</p>
//           <img src="download (3).jpeg" alt="Justice Scale" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button className="navbar-toggle" onClick={toggleNavbar}>
//         {isOpen ? "Close" : "Menu"}
//       </button>
//       <div className={`navbar ${isOpen ? "open" : ""}`}>
//         {/* Logo or Heading */}
//         <h2>Jur</h2>

//         {/* Menu Items */}
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//             Dashboard
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFolder} className="icon" />
//             My Cases
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faTasks} className="icon" />
//             Activities
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCalendar} className="icon" />
//             Calendar
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFile} className="icon" />
//             Files
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faGavel} className="icon" />
//             Open a Dispute
//           </li>
//         </ul>

//         {/* CTA Section */}
//         <div className="cta">
//           <p>Get Justice on every Claim</p>
//           <img src="download (3).jpeg" alt="Justice" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
//   faScaleBalanced,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h2>
//         <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
//         Jur
//       </h2>
//       <ul>
//         <li>
//           <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//           Dashboard
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFolder} className="icon" />
//           My Cases
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faTasks} className="icon" />
//           Activities
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faCalendar} className="icon" />
//           Calendar
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faFile} className="icon" />
//           Files
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faGavel} className="icon" />
//           Open a Dispute
//         </li>
//       </ul>
//       <div className="sidebar-image">
//         <img
//           src="/download (3).jpeg" /* Adjust to your image path */
//           alt="Justice"
//         />
//         <p>Get Justice on every Claim</p>
//       </div>
//     </div>
//   );
// };


// export default Navbar;





// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
//   faScaleBalanced,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div>
//         <h2>
//           <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
//           Jur
//         </h2>
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//             Dashboard
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFolder} className="icon" />
//             My Cases
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faTasks} className="icon" />
//             Activities
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCalendar} className="icon" />
//             Calendar
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFile} className="icon" />
//             Files
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faGavel} className="icon" />
//             Open a Dispute
//           </li>
//         </ul>
//       </div>

//       <div className="cta">
//         <img
//           src="/download(3).jpeg"}
          
//           alt="Scales of Justice"
//         />
//         <p>Get Justice on every Claim</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h2>Jur</h2>
//       <ul>
//         <li>
//           <span className="icon">📂</span> Dashboard
//         </li>
//         <li>
//           <span className="icon">📄</span> My Cases
//         </li>
//       </ul>
//       <div className="sidebar-image">
//         <img src="path-to-your-image" alt="Scales of Justice" />
//         <p>Get Justice on every Claim</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
//   faScaleBalanced,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div>
//         <h2>
//           <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
//           Jur
//         </h2>
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//             Dashboard
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFolder} className="icon" />
//             My Cases
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faTasks} className="icon" />
//             Activities
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCalendar} className="icon" />
//             Calendar
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFile} className="icon" />
//             Files
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faGavel} className="icon" />
//             Open a Dispute
//           </li>
//         </ul>
//       </div>

//       <div className="cta">
//         <img
//           src={`${process.env.PUBLIC_URL}/download(3).jpeg`}
//           alt="Scales of Justice"
//         />
//         <p>Get Justice on every Claim</p>
//       </div>
      
//     </div>
//   );
// };

// export default Navbar;





// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
//   faScaleBalanced,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div>
//         <h2>
//           <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
//           Jur
//         </h2>
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//             Dashboard
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFolder} className="icon" />
//             My Cases
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faTasks} className="icon" />
//             Activities
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCalendar} className="icon" />
//             Calendar
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFile} className="icon" />
//             Files
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faGavel} className="icon" />
//             Open a Dispute
//           </li>
//         </ul>
//       </div>

//       <div className="cta">
//         {/* Directly reference the image */}
//         <img
//           src="/download(3).jpeg"
//           alt="Scales of Justice"
//         />
//         <p>Get Justice on every Claim</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTachometerAlt,
//   faFolder,
//   faTasks,
//   faCalendar,
//   faFile,
//   faGavel,
//   faScaleBalanced,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div>
//         <h2>
//           <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
//           Jur
//         </h2>
//         <ul>
//           <li>
//             <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
//             Dashboard
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFolder} className="icon" />
//             My Cases
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faTasks} className="icon" />
//             Activities
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faCalendar} className="icon" />
//             Calendar
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faFile} className="icon" />
//             Files
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faGavel} className="icon" />
//             Open a Dispute
//           </li>
//         </ul>
//       </div>

//       <div className="cta">
//         {/* Corrected Image Reference */}
//         <img src="/download(3).jpeg" alt="Scales of Justice" />

//         <p>Get Justice on every Claim</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faFolder,
  faTasks,
  faCalendar,
  faFile,
  faGavel,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";


import justiceImage from "./download.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Navbar Header */}
      <div>
        <h2>
          <FontAwesomeIcon icon={faScaleBalanced} className="jur-icon" />
          Jur
        </h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
            Dashboard
          </li>
          <li>
            <FontAwesomeIcon icon={faFolder} className="icon" />
            My Cases
          </li>
          <li>
            <FontAwesomeIcon icon={faTasks} className="icon" />
            Activities
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} className="icon" />
            Calendar
          </li>
          <li>
            <FontAwesomeIcon icon={faFile} className="icon" />
            Files
          </li>
          <li>
            <FontAwesomeIcon icon={faGavel} className="icon" />
            Open a Dispute
          </li>
        </ul>
      </div>

      {/* Bottom Image and Text */}
      <div className="cta">
      <img src={justiceImage} alt="Scales of Justice" />
        {/* this is the img ..my image is in public folder*/}
        
        
        <p>Get Justice on every Claim</p>
      </div>
    </div>
  );
};

export default Navbar;
