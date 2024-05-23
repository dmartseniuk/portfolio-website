export default function ProjectImage({ title, image }) {
  return (
    <div className="bg-[url('./assets/project-bg.png')] bg-contain bg-no-repeat p-[4%] size-max">
      <img
        src={image}
        alt={title + " screenshot"}
        className="w-[540px] rounded-[20px] outline outline-blue"
      />
    </div>
  );
}
