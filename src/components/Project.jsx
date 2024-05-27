import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const orderMobile = (
    <>
      <ProjectImage image={image} title={title} />
      <ProjectDetails
        title={title}
        description={description}
        technologies={technologies}
        url={url}
      />
    </>
  );

  const orderLg =
    index % 2 === 0 ? (
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
    );

  return (
    <div className="flex lg:flex-row flex-col gap-8 items-center">
      {isMobile ? orderMobile : orderLg}
    </div>
  );
}
