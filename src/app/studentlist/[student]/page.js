"use client";
const Student = ({ params }) => {
  return (
    <main>
      <div>Student List</div>
      <div>{params.student}</div>

      <br></br>
    </main>
  );
};

export default Student;
