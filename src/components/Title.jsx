export default function Title({ title, color }) {
  return (
    <h1 className={`font-montserrat font-bold text-[100px] text-${color}`}>
      {title}
    </h1>
  );
}
