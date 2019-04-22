import React, { Component } from "react";
import Style from "./Card.module.css";

class Card extends Component {
  render() {
    const profile = this.props.profileData;
    const clicked = this.props.clicked;
    return (
      <div className={Style.profiles}>
        <img
          style={{ width: 100, height: 100 }}
          src={profile.avatar_url}
          alt=""
        />
        <div> {profile.name}</div>
        <div>{profile.company}</div>
        <a href={profile.html_url}>My Profile</a>
        <button className={Style.btn} onClick={clicked}>
          Delete
        </button>
      </div>
    );
  }
}

export default Card;
