import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    
    // In conditional rendering we can do it in four different ways

    //Short circuit method
    return this.state.isLoggedIn && <div>Welcome Demilade</div>

    //Element variable method
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Demilade</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>;

    //Ternary conditional operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Demilade</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    

    //if/else method
  }
}

export default UserGreeting;
