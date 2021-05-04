import "./ProgramList.css";

export const ProgramList = () => {
  const programs = [
    {
      program: "MERN Stack",
      icon: "fas fa-layer-group",
      link: "https://www.mongodb.com/mern-stack",
    },
    {
      program: "MongoDB",
      icon: "fas fa-database",
      link: "https://www.mongodb.com/",
    },
    {
      program: "Express",
      icon: "fas fa-server",
      link: "https://www.npmjs.com/package/express",
    },
    {
      program: "React.js",
      icon: "fab fa-react",
      link: "https://reactjs.org/",
    },
    {
      program: "Node.js",
      icon: "fab fa-node",
      link: "https://nodejs.org/en/about/",
    },
    {
      program: "JavaScript",
      icon: "fab fa-js",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      program: "HTML",
      icon: "fab fa-html5",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML",
    },
    {
      program: "CSS",
      icon: "fab fa-css3-alt",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
  ];

  return (
    <ul className="all-center program-list-container grid-4">
      {programs &&
        programs.map(({ program, icon, link }) => (
          <li key={program}>
            <a href={link}>
              <i className={icon} />
              {" " + program}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default ProgramList;
