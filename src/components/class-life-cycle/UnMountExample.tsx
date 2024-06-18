import React from "react";

type MyProps = {
  message?: string;
};

type MyState = {
  show: boolean;
};

export class Container extends React.Component<MyProps, MyState> {
  state: MyState = {
    show: true,
  };

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>THIS IS HEADER Hello World!</h1>;
  }
}
