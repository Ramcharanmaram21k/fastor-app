Fastor PWA Restaurant App
A modern progressive web application (PWA) built in React.js, demonstrating advanced UI and frontend features for the Fastor ReactJS Developer Assignment.
Features
* Authentication Flow
    * Simple mobile login screen.
    * OTP entry screen (123456).
* Restaurant Discovery
    * Displays a responsive grid of nearby restaurants using a mocked REST API.
    * Clean and modern UI, optimized for desktop and mobile.
* Restaurant Detail Image Superimpose
    * Shows the restaurant image centered on screen.
    * Fastor logo is superimposed right in the center of the image by default.
* Image Sharing (PWA/Modern Web Share API)
    * Users can share the composite restaurant image (with Fastor logo) to other applications via browser using the Web Share API (navigator.share).
* Bonus (Competitive, Optional)
    * Users can drag and reposition the Fastor logo anywhere on the restaurant image.
    * Logo size can be adjusted using a slider for further personalization.
    * Logo cannot be dragged outside the image (canvas clamped for better UX).
    * Smooth drag-and-drop experience with visual feedback.
      Tech Stack
* React.js
* React Router
* HTML Canvas 2D API
* Web Share API
* Modern CSS for responsive layouts
  Setup & Usage
1. Clone the repo and install dependencies:   bash git clone <repo-url>
2. cd fastor-pwa
3. npm install
4. npm start
5.     
6. Update mockData.js to use your local restaurant images in src/assets/ (see code sample in repo).
7. Run the app locally, test login/OTP, view restaurants, click any to open detail; move the Fastor logo and share your custom image!
8. (Optional) Deploy as a PWA for mobile install/app icon support.
   References / Inspiration
* Image Sharing on Web
    * MDN Web Docs: Web Share API — official docs
    * Google Web Fundamentals: Native Share — how sharing works in modern browsers
* Drag-and-Drop Canvas Features
    * MDN: CanvasRenderingContext2D.drawImage()
    * StackOverflow: Drag & Move Image on Canvas
      Demo Screenshots
* Login → OTP → Restaurant Grid → Detail Image Superimpose & Share!
  Attribution
* Restaurant images sourced from Unsplash (please see mockData.js for photo credits).
* Fastor logo provided as assignment material.
