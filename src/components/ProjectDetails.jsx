import arrow from "../assets/arrow.png";
import Link from "./Link";

export default function ProjectDetails({
  title,
  description,
  technologies,
  url,
}) {
  return (
    <div className="text-blue lg:w-3/5 md:w-3/4 w-5/6 flex flex-col justify-between lg:py-9 py-0 lg:gap-4 gap-2">
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
      <Link
        icon={arrow}
        label="GitHub Repository"
        url={url}
        textSize="normal"
      />
    </div>
  );
}
