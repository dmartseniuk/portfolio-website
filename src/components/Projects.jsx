import Project from "./Project";
import Title from "./Title";
import data from "../data.json";

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex bg-light-grey justify-center py-10">
        <div className="w-3/4 flex flex-col gap-10 content-center">
          <Title title="Projects" color="blue" />
          {data.projects.map((project, index) => (
            <Project
              key={project.id}
              index={index}
              title={project.title}
              image={require(`../assets/projects/${project.id}.png`)}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
