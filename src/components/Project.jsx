import { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

export default function Project({
  index,
  title,
  description,
  technologies,
  url,
  link,
  id,
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
      <ProjectImage title={title} id={id} link={link} />
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
        <ProjectImage title={title} id={id} link={link} />
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
        <ProjectImage title={title} id={id} link={link} />
      </>
    );

  return (
    <div className="flex lg:flex-row flex-col gap-8 items-center">
      {isMobile ? orderMobile : orderLg}
    </div>
  );
}
