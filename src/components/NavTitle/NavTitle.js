import React from "react";
import "./NavTitle.css";

const NavTitle = props => (
    <div>
        <ul className = "nav nav-pills nav-justified">
            <li><a href="/">Friend Picker</a></li>
            <li 
                className = {props.message.indexOf('incorrectly') !== -1 ?
                "desc-incorrect":
                props.message.indexOf('correctly') !== -1 ? 
                    "desc-correct" :
                    "desc-normal"}
            >
            {props.message}
            </li>
            <li>Score: <span style = {{color: "yellow"}}>{props.currentScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);
export default NavTitle;