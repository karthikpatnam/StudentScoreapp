function Filter({ search, setSearch, gradeFilter, setGradeFilter }) {
  return (
    <div>
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}>
        <option value="">All Grades</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="Fail">Fail</option>
      </select>
    </div>
  );
}

export default Filter;
