export default function Link({ icon, label, url, textSize, center, download }) {
  const textVariants = {
    normal: "text-[22px]",
    large: "lg:text-[28px] text-[24px]",
  };

  const iconVariants = {
    normal: "max-w-[25px]",
    large: "lg:max-w-[40px] max-w-[30px]",
  };

  return (
    <a
      className={`text-bright-orange ${
        textVariants[textSize]
      } font-hind-madurai font-semibold flex gap-3 ${
        center && "lg:self-start self-center"
      }`}
      href={url}
      target="_blank"
      rel="noreferrer"
      {...(download && { download: "Diana_Martseniuk_CV.pdf" })}
    >
      <img
        className={`object-contain ${iconVariants[textSize]}`}
        src={icon}
        alt="icon"
      />
      <p className="self-center">{label}</p>
    </a>
  );
}
