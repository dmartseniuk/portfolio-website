import SkillIcon from "./SkillIcon";

export default function Skill(skills) {
  console.log(skills.skills);
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-hind-madurai font-semibold text-[48px] leading-tight self-center">
        {skills.skills.level}
      </h1>
      <div className="flex justify-center gap-14">
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
