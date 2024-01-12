import React from "react";

export const Work:React.FC = () => {
    const electron = (window as any).electron;

    return (
    <div>
        This is work page content <br/>
        The home director is @ {electron.homeDir()} <br/>
        The OS Arch is {electron.arch()} <br/>
        The OS version {electron.osVersion()}

        
        </div>)
}