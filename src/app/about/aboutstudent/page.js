import Link from "next/link";

const AboutStudent = () => {
  return (
    <main>
      <div>About Student</div>
      <br></br>
      <br></br>
      <Link href={"/about"}>go to about page</Link>
    </main>
  );
};

export default AboutStudent;
