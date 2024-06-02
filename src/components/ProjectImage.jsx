import { useState } from "react";

export default function ProjectImage({ title, id, link }) {
  const [areControlsVisible, setControlsVisible] = useState(false);
  const isVideo = id.search("_with_video") !== -1;

  return (
    <div className="shadow-skills size-full outline outline-1 outline-bright-orange rounded-full flex justify-center self-center bg-bright-orange bg-opacity-[10%] md:w-max w-5/6">
      {isVideo ? (
        <video
          className="rounded-[20px] outline outline-blue self-center m-8 z-10 w-[90%] max-w-[500px]"
          poster={require(`../assets/projects/${
            id.search("_with_video") === -1 ? id : id.slice(0, -11)
          }.png`)}
          controls={areControlsVisible}
          onMouseOver={() => setControlsVisible(true)}
          onMouseLeave={() => setControlsVisible(false)}
        >
          <source
            src={require(`../assets/projects/${
              id.search("_with_video") === -1 ? id : id.slice(0, -11)
            }.mp4`)}
            itemType="video/mp4"
          />
        </video>
      ) : (
        <a
          href={link}
          className="self-center m-8 w-[90%] z-10"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require(`../assets/projects/${
              id.search("_with_video") === -1 ? id : id.slice(0, -11)
            }.png`)}
            alt={title}
            className="rounded-[20px] outline outline-blue"
          />
        </a>
      )}
    </div>
  );
}
