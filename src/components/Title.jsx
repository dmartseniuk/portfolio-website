export default function Title({ title, color }) {
  return (
    <h1
      className={`font-montserrat font-bold lg:text-[100px] text-[70px] text-${color} leading-tight lg:text-left text-center`}
    >
      {title}
    </h1>
  );
}
