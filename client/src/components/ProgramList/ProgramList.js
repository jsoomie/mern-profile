import "./ProgramList.css";

export const ProgramList = () => {
  const programs = [
    {
      program: "MERN Stack",
      icon: "fas fa-layer-group",
    },
    {
      program: "MongoDB",
      icon: "fas fa-database",
    },
    {
      program: "Express",
      icon: "fas fa-server",
    },
    {
      program: "React.js",
      icon: "fab fa-react",
    },
    {
      program: "Node.js",
      icon: "fab fa-node",
    },
    {
      program: "JavaScript",
      icon: "fab fa-js",
    },
    {
      program: "HTML",
      icon: "fab fa-html5",
    },
    {
      program: "CSS",
      icon: "fab fa-css3-alt",
    },
  ];

  return (
    <ul className="all-center program-list-container grid-4">
      {programs.map(({ program, icon }) => (
        <li key={program}>
          <i className={icon} />
          {" " + program}
        </li>
      ))}
    </ul>
  );
};

export default ProgramList;
