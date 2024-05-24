import Title from "./Title";
import data from "../data.json";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex bg-light-grey justify-center py-10 h-[90vh]">
        <div className="w-3/4 flex flex-col gap-10 justify-center text-blue">
          <Title title="Skill Highlights" color="blue" />
          <h1 className="font-hind-madurai font-semibold text-[48px] leading-tight self-center">
            Confident in
          </h1>
          <div className="flex justify-center gap-14">
            {data.skills.confident.map((skill) => (
              <div className="flex flex-col items-center gap-2">
                <Skill skill={skill} />
                <p className="font-hind-madurai text-[18px] text-light-blue">
                  {skill}
                </p>
              </div>
            ))}
          </div>
          <h1 className="font-hind-madurai font-semibold text-[48px] leading-tight self-center">
            Familiar with
          </h1>
          <div className="flex justify-center gap-14">
            {data.skills.familiar.map((skill) => (
              <div className="flex flex-col items-center gap-2">
                <Skill skill={skill} />
                <p className="font-hind-madurai text-[18px] text-light-blue">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
