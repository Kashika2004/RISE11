// // import React from "react";
// import Navbar from "./components/Navbar";
// import ProgressBar from "./components/ProgressBar";
// import ClaimForm from "./components/ClaimForm";
// import FileUpload from "./components/FileUpload";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <ProgressBar />
//       <div className="content">
//         <ClaimForm />
//         <div className="file-section">
//           <FileUpload label="Upload Contract" />
//           <FileUpload label="Upload Arbitration Agreement" />
//           <FileUpload label="Additional Documentation" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import ProgressBar from "./components/ProgressBar";
// import ClaimForm from "./components/ClaimForm";
// import "./styles/App.css";

// function App() {
//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Progress Bar */}
//         <div className="progress-bar-container">
//           <ProgressBar />
//         </div>

//         {/* Claim Form */}
//         <div className="form-section">
//           <ClaimForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




// import React from "react";
// import Navbar from "./components/Navbar";
// import ProgressBar from "./components/ProgressBar";
// import ClaimForm from "./components/ClaimForm";
// import "./App.css"; // Fix import path

// function App() {
//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Progress Bar */}
//         <div className="progress-bar-container">
//           <ProgressBar />
//         </div>

//         {/* Claim Form */}
//         <div className="form-section">
//           <ClaimForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from "react"; 
// import Navbar from "./components/Navbar";
// import ProgressBar from "./components/ProgressBar";
// import ClaimForm from "./components/ClaimForm";
// import "./App.css"; 

// function App() {
//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Progress Bar */}
//         <div className="progress-bar-container">
//           <ProgressBar />
//         </div>

//         {/* Claim Form */}
//         <div className="form-section">
//           <ClaimForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React from "react";
// import Navbar from "./components/Navbar";
// import ProgressBar from "./components/ProgressBar";
// import ClaimForm from "./components/ClaimForm";
// // import "./styles/App.css";
// import "./App.css";


// function App() {
//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="progress-bar-container">
//           <ProgressBar />
//         </div>

//         {/* Claim Form */}
//         <div className="form-section">
//           <ClaimForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React from "react";
// import Navbar from "./components/Navbar";
// import ProgressBar from "./components/ProgressBar";
// import ClaimForm from "./components/ClaimForm";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="progress-bar-container">
//           <ProgressBar />
//         </div>

//         {/* Claim Form */}
//         <div className="form-section">
//           <ClaimForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;







// import React from "react";
// import Navbar from "./components/Navbar";
// import ProgressBar from "./components/ProgressBar";
// import ClaimForm from "./components/ClaimForm";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-container">
//       {/* Sidebar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="progress-bar-container">
//           <ProgressBar />
//         </div>

//         {/* Claim Form */}
//         <div className="form-section">
//           <ClaimForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




import React from "react";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import ClaimForm from "./components/ClaimForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="top-icons">
          <FontAwesomeIcon icon={faBell} className="top-icon" title="Notifications" />
          <FontAwesomeIcon icon={faUserCircle} className="top-icon" title="Profile" />
        </div>
        <ProgressBar />
        <ClaimForm />
      </div>
    </div>
  );
};

export default App;



