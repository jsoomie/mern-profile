import "./ProjectList.css";
import projects from "../../db/projectlist.json";

export const ProjectsList = () => {
  return (
    <div className="projects-container grid-3">
      {projects
        ? projects.map(({ id, title, image, url, description }) => (
            <div className="card-container" key={id}>
              <a href={url} title={title} target="_blank" rel="noreferrer">
                <div
                  className="card-header"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    borderRadius: "5px",
                  }}
                ></div>
                <div className="card-body">{title}</div>
                <div className="card-footer">{description}</div>
              </a>
            </div>
          ))
        : "Unable to fetch projects from source"}
    </div>
  );
};

export default ProjectsList;
