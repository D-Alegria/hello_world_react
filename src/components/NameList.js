import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Demi", "Temi", "Lashe"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  //When to use index as a key?

  //1. The item in your list do not have a unique id
  //2. The list is a static list and will not change
  //3. The list will never be reordered or filtered 

  return <div>{nameList}</div>;
}

export default NameList;