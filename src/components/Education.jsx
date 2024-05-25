import PlaceOfStudy from "./PlaceOfStudy";
import Title from "./Title";
import data from "../data.json";
import Courses from "./Courses";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="about" background="bg-light-grey" flex="flex-col">
      <Title title="Education" color="blue" />
      <div className="flex gap-10">
        {data.universities.map((university) => (
          <PlaceOfStudy
            key={university.id}
            subject={university.subject}
            time={university.time}
            uni={university.uni}
          />
        ))}
      </div>
      <Courses />
    </Section>
  );
}
