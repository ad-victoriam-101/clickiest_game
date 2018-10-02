import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
      <div className="img-container">
        <a onClick={() => props.selectFriend(props.id)}
            className = {props.currentScore === 0 ? "picked picked_ex": "picked"}
          >
            <img alt={props.name} src={props.image} />
          </a>
        </div>
  </div>
);

export default FriendCard;
