import { useState } from "react";

function AddStudent({ addStudent }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    marks: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ ...form, marks: Number(form.marks) });
    setForm({ name: "", email: "", marks: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <input name="marks" type="number" placeholder="Marks" onChange={handleChange} value={form.marks} />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
