const PersonCard = (props) => {
    return (
      <>
        <h3>Name: {props.firstName} {props.lastName}</h3>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
      </>
    );
  }
  
  export default PersonCard;
  