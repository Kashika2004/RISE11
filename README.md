# RISE11
 Overview
This application serves as a streamlined platform for managing claims and resolving disputes. It features a progress tracker, a responsive interface, and a user-friendly claim submission form. Built with React.js, the application adopts a modular design to ensure scalability and maintainable development.
Key Features
•	Navigation Sidebar: Easy access to key sections, including Calendar, Files, Activities, My Cases, and options to initiate a dispute.
•	Progress Tracker: A visual guide to assist users through the step-by-step process of filing a claim.
•	Claim Submission Form: Enables users to input details like claim amount, location, language preference, and supporting statements, along with uploading necessary documents.
•	Top Icons: Includes profile and notification features to enhance user interaction.
•	Responsive Design: Delivers an optimal experience across desktops, tablets, and mobile devices.
Method for Creating the Dashboard
1. Structuring Modular Components
The application is divided into reusable components to enhance maintainability:
•	The Navbar component manages the navigation sidebar.
•	The ProgressBar component displays the progress tracker.
•	The ClaimForm component handles user input fields.
Each component is paired with its own CSS file to ensure a clean and organized modular design.
2. Responsive Design Implementation
To ensure compatibility across different screen sizes, responsive layouts were created using CSS Flexbox and Media Queries.
Breakpoints for specific device widths include:
•	Desktop: Greater than 1024px
•	Tablet: Between 768px and 1024px
•	Mobile: Less than 768px
3. Managing Assets
•	Images are stored in the public directory to allow easy referencing via relative paths.
•	Font Awesome icons were integrated for a sleek and modern user interface, representing features like Claim Value, Location, and Language.
4. Personalized Styling
A clean and user-friendly interface was achieved by using light color schemes, such as #ffffff for both the background and cards, creating a cohesive design.
Consistent use of box shadows, padding, and margins added a refined and polished look to the application, ensuring a visually appealing and well-structured layout.
Challenges Faced and Their Solutions
1. Image Not Displaying in the Navbar
•	Issue: The image referenced in Navbar.js was not rendering as expected.
•	Solution: Verified that the image file was located in the public directory and updated the reference to /download(3).jpeg for direct access instead of relying on process.env.PUBLIC_URL.
2. Responsive Design Issues
•	Issue: The layout was breaking when viewed on smaller screens.
•	Solution: Applied CSS Media Queries to dynamically adjust styles for different screen sizes, ensuring a seamless user experience across all devices.
3. Sidebar Overlapping on Smaller Displays
•	Issue: On devices with smaller screens, the sidebar content overlapped with the main content.
•	Solution: Used Flexbox to restructure the layout, changing the sidebar orientation from vertical to horizontal for screens smaller than 768 pixels.
4. Icon Alignment
•	Issue: The profile and notification icons in the top-right corner were misaligned.
•	Solution: Created a dedicated top-icons container and styled it using Flexbox to ensure proper alignment and spacing.
5. Font Awesome Integration
•	Issue: Font Awesome icons were not loading due to dependency issues.
•	Solution: Installed the @fortawesome/react-fontawesome package along with its required dependencies, ensuring proper configuration and smooth integration of the icons.
Assumptions
1.	Static Asset Storage: It was assumed that all static assets, such as images, would be stored in the public directory for straightforward referencing.
2.	Static Data Usage: While the dashboard is intended to integrate with a backend API, static data is currently being used for demonstration purposes.
3.	Single-Page Application (SPA): The application is presumed to operate as a single-page application without requiring additional routing functionality.
4.	Icons Functionality: The icons in the top-right corner are assumed to represent notifications and user profiles.
5.	Backend Validation: Inputs such as claim value and contract value in the form are assumed to undergo validation on the backend.
Technologies Used – 
1)React.js: Component-based UI development. 
2)CSS3: Styling and responsive design using Flexbox and Media Queries.
3)Font Awesome: Icon library for enhanced visual representation.


