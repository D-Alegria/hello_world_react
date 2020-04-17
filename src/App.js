import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent/> */}
      {/* <EventBinding/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Temilade" heroName="Neutron">
        <p>This is a child props</p>
      </Greet> */}
      {/* <Greet name="Toluwalashe" heroName="Lashe"> */}
      {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* <Greet name="Demilade" heroName="Demi" /> */}
      {/* <Welcome name="Temilade" heroName="Neutron"/> */}
      {/*<Welcome name="Toluwalashe" heroName="Lashe"/>
      <Welcome name="Demilade" heroName="Demi"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
