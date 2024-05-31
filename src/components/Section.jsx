export default function Section({
  children,
  id,
  height,
  background,
  shadow,
  flex,
  center,
}) {
  const bgVariants = {
    orange: "bg-bright-orange",
    home: "bg-home bg-cover bg-no-repeat",
    grey: "bg-light-grey",
    basicWithPadding: "py-10",
  };

  const heightVariants = {
    "90vh": "lg:h-[90vh]",
  };

  const shadowVariants = {
    basic: "drop-shadow-button",
  };

  const flexVariants = {
    double: "lg:flex-row flex-col",
    with10Gap: "flex-col gap-[2.5rem]",
    with14Gap: "flex-col gap-14",
    withColorAndAdjustment: "flex-col text-blue lg:items-start items-center",
  };

  return (
    <section>
      <span id={id} className="mt-[-88px] pb-[88px] block"></span>
      <div
        className={`flex ${bgVariants[background]} ${heightVariants[height]} justify-center ${shadowVariants[shadow]}`}
      >
        <div
          className={`flex ${flexVariants[flex]} justify-center ${
            center ? "items-center" : undefined
          } lg:gap-10 gap-5 lg:w-3/4 w-full lg:my-0 my-6`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
