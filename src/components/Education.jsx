import PlaceOfStudy from "./PlaceOfStudy";
import Title from "./Title";
import data from "../data.json";
import Courses from "./Courses";

export default function Education() {
  return (
    <section id="education">
      <div className="flex bg-light-grey justify-center py-10">
        <div className="w-3/4 flex flex-col gap-10 content-center">
          <Title title="Education" color="blue" />
          <div className="flex gap-28 justify-stretch">
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
        </div>
      </div>
    </section>
  );
}
