import React from "react";
import { Outlet } from "react-router-dom"

export const Explore:React.FC = () => {

    return (    
        
    <div>    
    <div className="sidebar">
        <a className="link" href="/">Home</a>
        <a className="link" href="/explore">Explore</a>
    </div>
    
     <div className="main-content">
        <h1>Explore</h1>
        <p>Here you can explore and find information.</p>
     </div>
     </div>)
}