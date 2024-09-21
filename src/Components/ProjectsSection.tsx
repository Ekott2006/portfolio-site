import LinkIcon from "./../assets/svg/open-outline.svg";
import GithubIcon from "./../assets/svg/github.svg";
import { projects } from "../data";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="main-project-cards">
        {projects.Main.map((x) => (
          <div className="card">
            <img src={x.src} alt={`${x.title} Image`} />
            <div className="card-body">
              <h3>{x.title}</h3>
              <small>{x.details}</small>
              <div className="card-codes">
                {x.tags.map((tag) => (
                  <code>{tag}</code>
                ))}
              </div>
              <div className="links">
                <a href={x.links.website}>
                  <img src={LinkIcon} alt="Website Link" />
                  View Site
                </a>
                <a href={x.links.code}>
                  <img src={GithubIcon} alt="Github Link" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Other Projects </h2>
      <div className="other-project-cards">
        {projects.Other.map((x) => (
          <div className="card">
            <div className="card-heading">
              <h3>{x.title}</h3>
              <a href={x.links.code}>
                <img src={GithubIcon} alt="Github Link" />
              </a>
              {/* {x.links.website ? (
                <a href={x.links.website}>
                  <img src={LinkIcon} alt="Website Link" />
                </a>
              ) : (
                <></>
              )} */}
            </div>
            <small>{x.details}</small>
            <div className="card-codes">
              {x.tags.map((tag) => (
                <code>{tag}</code>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/Ekott2006?tab=repositories"
        className="more-projects"
      >
        See More Projects
      </a>
    </section>
  );
};

export default ProjectsSection;
