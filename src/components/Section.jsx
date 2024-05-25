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
    <section id={id}>
      <div
        className={`flex ${background} h-[${height}] justify-center ${shadow}`}
      >
        <div
          className={`flex ${flex} justify-center ${
            center ? "items-center" : undefined
          } gap-10 w-3/4`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
