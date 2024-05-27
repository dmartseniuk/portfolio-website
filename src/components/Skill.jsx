import SkillIcon from "./SkillIcon";

export default function Skill(skills) {
  return (
    <div className="flex flex-col gap-10 lg:w-full md:w-3/4 w-5/6">
      <h1 className="font-hind-madurai font-semibold lg:text-[48px] text-[42px] leading-tight self-center">
        {skills.skills.level}
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.skills.technologies.map((technology) => (
          <div key={technology} className="flex flex-col items-center gap-2">
            <SkillIcon skill={technology} />
            <p className="font-hind-madurai text-[18px] text-light-blue">
              {technology}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
