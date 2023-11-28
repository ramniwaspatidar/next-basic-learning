import Link from "next/link";

const About = () => {
  return (
    <main>
      <Link href={"/about/aboutstudent"}>go to about student page</Link>
      <br></br>
      <br></br>
      <Link href={"/about/aboutcollege"}>go to about college page</Link>
    </main>
  );
};

export default About;
