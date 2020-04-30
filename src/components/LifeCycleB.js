import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Demilade",
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");

    return null;
  }

  render() {
    console.log("LifeCycleB render");

    return <div>LifeCycle B</div>;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
}

export default LifeCycleB;
