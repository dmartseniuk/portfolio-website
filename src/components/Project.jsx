import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

export default function Project({
  index,
  title,
  description,
  image,
  technologies,
  url,
}) {
  return (
    <div className="flex gap-8">
      {index % 2 === 0 ? (
        <>
          <ProjectImage image={image} title={title} />
          <ProjectDetails
            title={title}
            description={description}
            technologies={technologies}
            url={url}
          />
        </>
      ) : (
        <>
          <ProjectDetails
            title={title}
            description={description}
            technologies={technologies}
            url={url}
          />
          <ProjectImage image={image} title={title} />
        </>
      )}
    </div>
  );
}
