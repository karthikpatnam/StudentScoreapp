function Summary({ students }) {
  if (students.length === 0) return <p>No students available</p>;

  const marksArray = students.map((s) => s.marks);

  const total = students.length;
  const highest = Math.max(...marksArray);
  const lowest = Math.min(...marksArray);
  const average =
    marksArray.reduce((sum, val) => sum + val, 0) / total;

  return (
    <div>
      <h3>📊 Class Summary</h3>
      <p>Total Students: {total}</p>
      <p>Highest Marks: {highest}</p>
      <p>Lowest Marks: {lowest}</p>
      <p>Average Marks: {average.toFixed(2)}</p>
    </div>
  );
}

export default Summary;
