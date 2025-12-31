import { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import Filter from "./components/Filter";
import Summary from "./components/Summary";

const sampleData = [
  { name: "Arun", email: "arun@mail.com", marks: 88 },
  { name: "Meena", email: "meena@mail.com", marks: 95 },
  { name: "Rahul", email: "rahul@mail.com", marks: 72 }
];

const getGrade = (marks) => {
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "Fail";
};

function App() {
  const [students, setStudents] = useState(sampleData);
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const filteredStudents = students.filter((student) => {
    const grade = getGrade(student.marks);
    return (
      (student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase())) &&
      (gradeFilter === "" || grade === gradeFilter)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Score Management App</h1>

      <AddStudent addStudent={addStudent} />
      <Filter
        search={search}
        setSearch={setSearch}
        gradeFilter={gradeFilter}
        setGradeFilter={setGradeFilter}
      />
      <Summary students={filteredStudents} />
      <StudentList students={filteredStudents} getGrade={getGrade} />
    </div>
  );
}

export default App;
