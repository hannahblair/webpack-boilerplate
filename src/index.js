import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export class App extends React.Component {
  render() {
    return (
      <div>
        <img src="https://cdn-central.azureedge.net/-/media/images/kaytee-na/us/learn-care/ask-the-pet-bird-experts/ways-to-show-parrot-love/parrot%20png.png?h=304&la=en&w=499&hash=D9B5C2B1A3D578FB86E0237C99E4DB6E2BB9878C"></img>
        <br />
        Hello World
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
