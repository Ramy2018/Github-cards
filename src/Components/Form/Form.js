import React, { Component } from "react";
import Axios from "axios";
import Style from "./Form.module.css";

class Form extends Component {
  state = { userName: "" };
  submitHandlar = async event => {
    event.preventDefault();
    const res = await Axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(res.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandlar}>
        <div className={Style.form}>
          <input
            type="text"
            placeholder="Github user"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
          />
          <button className={Style.btn}>Add Cards</button>
        </div>
      </form>
    );
  }
}

export default Form;
