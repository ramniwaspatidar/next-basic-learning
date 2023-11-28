/* eslint-disable react/jsx-key */
import Link from "next/link";

const StudentList = () => {
  const tempData = [
    { name: "ram", id: 1 },
    { name: "shayam", id: 2 },
    { name: "test", id: 3 },
  ];
  return (
    <main>
      <div>Student List</div>
      <br></br>

      <ul>
        {tempData.map((item) => {
          return (
            <li>
              <Link href={"/studentlist/" + item.id}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default StudentList;
