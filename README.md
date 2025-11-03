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

References 
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


<img width="1709" height="950" alt="image" src="https://github.com/user-attachments/assets/a77cd4ad-cb5a-4729-bee3-75505b50c632" />
<img width="1710" height="953" alt="image" src="https://github.com/user-attachments/assets/f104265c-9f63-4011-82e1-85294c950184" />
<img width="1702" height="948" alt="image" src="https://github.com/user-attachments/assets/0964bed5-059c-43e8-83c2-f490c29e72c6" />
<img width="1307" height="731" alt="image" src="https://github.com/user-attachments/assets/1b3e02fa-e6af-436a-bebc-491f2d3b641e" />




