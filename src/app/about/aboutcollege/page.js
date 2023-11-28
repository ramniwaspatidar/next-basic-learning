import Link from "next/link";

const AboutCollege = () => {
  return (
    <main>
      <div>About College</div>
      <br></br>
      <br></br>
      <Link href={"/about"}>go to about page</Link>
      <br></br>
    </main>
  );
};

export default AboutCollege;
