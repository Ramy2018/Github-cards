import React, { Component } from "react";
import Style from "./App.module.css";
import CardList from "../Components/CardList/CardList";
import Form from "../Components/Form/Form";

class App extends Component {
  state = {
    profiles: []
  };
  addNewProfile = profileData => {
    console.log(profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  deleteProfile = profileIndex => {
    const profiles = [...this.state.profiles];
    profiles.splice(profileIndex, 1);
    this.setState({ profiles: profiles });
  };
  render() {
    return (
      <div className={Style.Title}>
        <div> {this.props.title} </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList testData={this.state.profiles} clicked={this.deleteProfile} />
      </div>
    );
  }
}

export default App;
