import React from "react"
import { Outlet } from "react-router-dom"

export const Layout: React.FC = () => {
    return <div>
      <p>This is our layout</p>
      <ul>
        <li><a href ="/work" >Work</a></li>
        <li><a href ="/home" >Home</a></li>
        </ul>  
      <Outlet />
    </div>
} 