import React from "react";

const Onclick = (props) => {
  console.log(props);
  const {
    firstName,
    lastName,
    phoneNo,
    email,
    cgpa,
    enrollmentNo,
    nameofProject,
    summary,
    technology,
    yearofpassing,
  } = props.value;

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{phoneNo}</p>
      <p>{cgpa}</p>
      <p>{enrollmentNo}</p>
      <p>{nameofProject}</p>
      <p>{summary}</p>
      <p>{technology}</p>
      <p>{yearofpassing}</p>
    </div>
  );
};

export default Onclick;
