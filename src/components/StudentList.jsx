function StudentList({ students, getGrade }) {
  return (
    <table border="1" width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Marks</th>
          <th>Grade</th>
        </tr>
      </thead>

      <tbody>
        {students.map(({ name, email, marks }, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{marks}</td>
            <td>{getGrade(marks)}</td> {/* ✅ THIS LINE ADDS THE GRADE */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
