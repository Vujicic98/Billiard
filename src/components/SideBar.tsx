import "../styles/Sidebar.css"
import React from "react";
import App from "./App";


export const Bar: React.FC = () : JSX.Element => {
    return (
        <>
        <button className="Dugme" onClick={() => {return (App)}}>HOME</button>
        <div className="Dugme">GAMES</div>
        <div className="Dugme">POOL TABLE</div>
        <div className="Dugme">POOL CUES</div>
        </>
    )
}