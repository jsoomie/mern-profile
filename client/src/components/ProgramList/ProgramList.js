import "./ProgramList.css";
import programs from "../../db/programlist.json";

export const ProgramList = () => {
  return (
    <ul className="all-center program-list-container grid-4">
      {programs &&
        programs.map(({ id, program, icon, link }) => (
          <li key={id}>
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
