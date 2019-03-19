import React from "react";

function Student(props) {
  return (
    <div className="student-card">
      <img src={props.studentProp.img} alt={props.studentProp.name} />

      <div className="student-info">
        <h3>{props.studentProp.name}</h3>
        <p>
          <strong>Identity:</strong> {props.studentProp.identity}
        </p>
        <p>
          <strong>Age:</strong> {props.studentProp.age}
        </p>
        <p>
          <strong>Best Friends:</strong> {props.studentProp.bestFriend}
        </p>
      </div>
    </div>
  );
}

export default Student;
