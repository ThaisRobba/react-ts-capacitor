import React from "react";
import ReactDOM from "react-dom";

import { Capacitor, Plugins } from "@capacitor/core";

const App = () => {
  async function share() {
    if (!Capacitor.isNative) {
      console.log("NOT NATIVE");
    } else {
      console.log("IS NATIVE!!!");
    }
    const { Share } = Plugins;
    await Share.share({
      title: "See cool stuff",
      text: "Really awesome thing you need to see right meow",
      url: "http://ionicframework.com/",
      dialogTitle: "Share with buddies",
    });
  }

  return (
    <div>
      <p>hello2</p>
      <button onClick={share}>shareee</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
