export default function ProjectImage({ title, image }) {
  return (
    <div className="shadow-skills size-full outline outline-1 outline-bright-orange rounded-full flex justify-center bg-bright-orange bg-opacity-[10%] w-max">
      <img
        src={image}
        alt={title}
        className="rounded-[20px] outline outline-blue self-center m-8 z-10 w-[90%]"
      />
    </div>
  );
}
