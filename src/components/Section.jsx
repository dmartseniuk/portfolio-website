export default function Section({
  children,
  id,
  height,
  background,
  shadow,
  flex,
  center,
}) {
  return (
    <section>
      <span id={id} className="mt-[-88px] pb-[88px] block"></span>
      <div
        className={`flex ${background} lg:${height} justify-center ${shadow}`}
      >
        <div
          className={`flex ${flex} justify-center ${
            center ? "items-center" : undefined
          } lg:gap-10 gap-5 lg:w-3/4 w-full lg:my-0 my-8`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
