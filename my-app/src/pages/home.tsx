import React from "react";
import '/Users/lokendraagrawal/Downloads/Edu_Project/EduProject/my-app/src/style.css';
import '/Users/lokendraagrawal/Downloads/Edu_Project/EduProject/my-app/src/App.css';


export const Home:React.FC = () => {

    return (    
        
    <div>  



        
    <div className="sidebar">
        <a href="/home">Home</a>
        <a href="/explore">Explore</a>
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
     </div>)
}