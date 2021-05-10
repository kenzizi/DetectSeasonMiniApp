import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "semantic-ui-css/semantic.min.css";
import "./SeasonDisplay.css";
class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude)
      return <div> Error : {this.state.errorMessage}</div>;

    if (!this.state.errorMessage && this.state.latitude)
      return (
        <SeasonDisplay
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      );

    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
