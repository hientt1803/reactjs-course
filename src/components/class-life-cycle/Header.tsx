import React from "react";

type MyProps = {
  message: string;
};

type MyState = {
  favoritecolor: string;
};

export class Header extends React.Component<MyProps, MyState> {
  state: MyState = {
    favoritecolor: "red",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 3000);
  }

  componentDidUpdate() {
    const myDiv = document.getElementById("mydiv");

    if (!myDiv) {
      return;
    }

    myDiv.innerHTML = "The updated favorite is " + this.state.favoritecolor;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <h4>Props value: {this.props.message}</h4>
        <div id="mydiv"></div>
      </div>
    );
  }
}
