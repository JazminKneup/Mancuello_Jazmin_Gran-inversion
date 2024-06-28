import React, { useState } from "react";
import PersonCard from "../PersonCard/PersonCard";  

function App() {
  const personsInitials = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown",
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown",
    },
  ];

  const [listPersons, setListPersons] = useState(personsInitials);

  return (
    <>
      <h1>Person Card</h1>
      <h2>List Persons</h2>
      {listPersons.map((person, index) => (
        <PersonCard  
          key={index}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
        />
      ))}
    </>
  );
}

export default App;

