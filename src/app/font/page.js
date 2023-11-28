import { Roboto } from "next/font/google";

const robot = Roboto({
  weight: "100",
  subsets: ["latin"],
});

export default function Font() {
  return (
    <div>
      <h1> Nomral font size</h1>
      <h1 style={{ fontFamily: "roboto", fontWeight: 100 }}> Roboto font size</h1>
      <h1 className={robot.className}>Roboto font size</h1>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "font styling page",
    description: "font page description",
  };
}
