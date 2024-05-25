import Title from "./Title";
import Section from "./Section";
import data from "../data.json";
import Skill from "./Skill";

export default function Skills() {
  return (
    <Section
      id="skills"
      background="bg-light-grey py-10"
      flex="flex-col text-blue"
      height="90vh"
    >
      <Title title="Skill Highlights" color="blue" />
      {data.skills.map((skills) => (
        <Skill skills={skills} />
      ))}
    </Section>
  );
}
