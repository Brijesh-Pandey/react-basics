import React from "react";
import "./styles.css";
import StudentList from "./Components/StudentList";
import StudentDetail from "./Components/viewDetails";

import { Box } from "@material-ui/core";

export default function App() {
  const studentList = [
    {
      name: "Dwayne",
      id: 1,
      hobby: "Acting , Wrestling",
      aboutMe: "I love to Act"
    },
    {
      name: "Chester",
      id: 2,
      hobby: "Singing ",
      aboutMe: "I love to Sing"
    },
    {
      name: "Ronaldo",
      id: 3,
      hobby: "Football",
      aboutMe: "I love to Score"
    },
    {
      id: 4,
      name: "Brijesh",
      hobby: "Football , Coding",
      aboutMe: "I love to Code"
    },
    {
      id: 5,
      name: "Axel",
      hobby: "Playing Football , Dancing",
      aboutMe: "I love to dance"
    },
    {
      id: 6,
      name: "Mark",
      hobby: "Playing Football , Singing",
      aboutMe: "I love to play"
    },
    {
      id: 7,
      name: "Jude",
      hobby: "Playing Football , Reading",
      aboutMe: "I love to Read"
    }
  ];
  const [student, setStudent] = React.useState({});
  const [filterValue, setFilterValue] = React.useState("");

  const handleClick = (student) => setStudent(student);

  const handleChange = (event) => {
    setStudent({});
    setFilterValue(event.target.value);
  };

  return (
    <Box display={"flex"}>
      <StudentList
        students={studentList.filter((student) =>
          student.name.toLowerCase().includes(filterValue.toLowerCase())
        )}
        onClick={handleClick}
        onChange={handleChange}
      />

      <StudentDetail student={student} />
    </Box>
  );
}
