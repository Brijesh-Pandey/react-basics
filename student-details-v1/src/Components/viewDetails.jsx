import React from "react";
export default function ViewDetail({ student = {} }) {
  return (
    <div>
      <div>{student.name}</div>
      <div>{student.hobby}</div>
      <div>{student.aboutMe}</div>
    </div>
  );
}
