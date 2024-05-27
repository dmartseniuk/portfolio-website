import arrow from "../assets/arrow.png";

export default function ProjectDetails({
  title,
  description,
  technologies,
  url,
}) {
  return (
    <div className="text-blue lg:w-3/5 md:w-3/4 w-5/6 flex flex-col justify-between lg:py-9 py-0">
      <div>
        <h1 className="font-hind-madurai font-semibold lg:text-[48px] text-[42px] leading-tight">
          {title}
        </h1>
        <p className="font-hind-madurai text-[22px]">{description}</p>
      </div>
      <div>
        <ul className="text-[24px] font-hind-madurai font-semibold">
          Technology:
          {technologies.map((technology, index) => (
            <li className="flex gap-3" key={index}>
              <img
                src={require(`../assets/icons/${technology.toLowerCase()}.png`)}
                alt={`${technology} logo`}
                className="object-contain max-w-[30px] max-h-[30px]"
              />
              <p className="font-hind-madurai text-[22px] font-normal self-center">
                {technology}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <a
        className="text-bright-orange text-[22px] font-hind-madurai font-semibold flex gap-3"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="object-contain max-w-[25px]"
          src={arrow}
          alt="Arrow icon"
        />
        <p className="self-center">GitHub Repository</p>
      </a>
    </div>
  );
}
