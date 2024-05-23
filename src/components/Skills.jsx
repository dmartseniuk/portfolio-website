import Title from "./Title";
import data from "../data.json";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex bg-light-grey justify-center py-10">
        <div className="w-3/4 flex flex-col gap-10 content-center text-blue">
          <Title title="Skill Highlights" color="blue" />
          <h1 className="font-hind-madurai font-semibold text-[48px] leading-tight self-center">
            Confident in
          </h1>
          <div className="flex justify-center gap-14">
            {data.skills.confident.map((skill) => (
              <Skill skill={skill} />
            ))}
          </div>
          <h1 className="font-hind-madurai font-semibold text-[48px] leading-tight self-center">
            Familiar with
          </h1>
          <div className="flex justify-center gap-14">
            {data.skills.familiar.map((skill) => (
              <Skill skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
