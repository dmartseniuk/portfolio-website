import PlaceOfStudy from "./PlaceOfStudy";
import Title from "./Title";
import data from "../data.json";
import Courses from "./Courses";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="about" background="bg-light-grey" flex="flex-col gap-[2.5rem]">
      <Title title="Education" color="blue" />
      <div className="flex flex-col lg:flex-row gap-10 lg:w-full md:w-3/4 w-5/6 self-center">
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
