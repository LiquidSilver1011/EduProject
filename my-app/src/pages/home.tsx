import React from "react";
import '/Users/lokendraagrawal/Downloads/Edu_Project/EduProject/my-app/src/pages/style.css';
import '/Users/lokendraagrawal/Downloads/Edu_Project/EduProject/my-app/src/index.css';
import { Outlet } from "react-router-dom";


export const Home:React.FC = () => {

    return <div>  
        <link href="style.css" rel="stylesheet" />
        
    <div className="sidebar">
        <a href="/" className="link">Home</a>
        <a href="/explore" className="link">Explore</a>
     </div>
    
     <div className="main-content">
        <h1>Welcome to the Home Page</h1>
        <p>Here are your enrolled courses:</p>
        <ul>
            <li>Sanitation Basics</li>
            <li>Digital Literacy Workshop</li>
            <li>Music Fundamentals</li>
        </ul>
     </div>
     <Outlet/>
      </div>
};