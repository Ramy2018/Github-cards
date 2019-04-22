import React from "react";
import Card from "../Card/Card";

const cardList = props => (
  <div>
    {props.testData.map((profileData, index) => (
      <Card
        key={profileData.id}
        profileData={profileData}
        clicked={() => props.clicked(index)}
      />
    ))}
  </div>
);

export default cardList;
