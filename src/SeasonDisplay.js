import React from "react";
import { Icon } from "semantic-ui-react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  console.log(" the latitude = " + props.Latitude);
  const season = getSeason(props.latitude, new Date().getMonth());

  const Text = season === "winter" ? " Cold.. burrr :'D  !" : "Beach Time :D ";
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <Icon
        name={`${icon === "snowflake" ? "snowflake" : "sun"}`}
        size="massive"
        className="icon-left"
      />
      <h1 className="Text-gen">{Text}</h1>
      <Icon
        name={`${icon === "snowflake" ? "snowflake" : "sun"}`}
        size="massive"
        className="icon-right"
      />{" "}
    </div>
  );
};
export default SeasonDisplay;
