import Project from "./Project";
import Title from "./Title";
import data from "../data.json";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" background="basicWithPadding" flex="with14Gap">
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
    </Section>
  );
}
