import { useEffect, useState } from "react";
interface programProps {
  country: string;
  id: number;
  poster: string;
  synopsis: string;
  title: string;
  year: number;
}

function Programs() {
  const [program, setProgram] = useState<programProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
      });
  }, []);

  return (
    <>
      {program.map((programDetail) => (
        <article key={programDetail.id}>
          <h3>{programDetail.title}</h3>
          <img src={programDetail.poster} alt={programDetail.title} />
          <p>
            {programDetail.synopsis}
            {programDetail.year}
            {programDetail.country}
          </p>
        </article>
      ))}
    </>
  );
}

export default Programs;
