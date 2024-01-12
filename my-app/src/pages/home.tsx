import React from "react";

export const Home:React.FC = () => {

    return (    
        
    <div>    
    <div /*class="sidebar"*/>
        <a href="/home">Home</a>
        <a href="/explore">Explore</a>
     </div>
    
     <div /*class="main-content"*/>
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