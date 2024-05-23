export default function Skill({ skill }) {
  return (
    <div className="shadow-skills w-[80px] h-[80px] outline outline-bright-orange rounded-full flex justify-center bg-bright-orange bg-opacity-[5%]">
      <img
        className="self-center shadow-none"
        src={require(`../assets/skills/${skill.toLowerCase()}.png`)}
        alt={skill}
      />
    </div>
  );
}
