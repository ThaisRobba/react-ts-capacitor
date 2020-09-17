import React from "react";
import ReactDOM from "react-dom";

import { Plugins } from "@capacitor/core";

async function share() {
  const { Share } = Plugins;
  await Share.share({
    title: "See cool stuff",
    text: "Really awesome thing you need to see right meow",
    url: "http://ionicframework.com/",
    dialogTitle: "Share with buddies",
  });
}

const App = () => {
  return (
    <div>
      <p>hello2</p>
      <button onClick={share}>shareee</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
