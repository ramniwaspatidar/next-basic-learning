"use client";

const Lecture = ({ params }) => {
  console.log(params);

  return <div>{"Lecture material" + "    " + params.lecture[0]} </div>;
};

export default Lecture;
