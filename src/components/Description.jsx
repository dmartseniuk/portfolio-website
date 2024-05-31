export default function Description({ children, color }) {
  return (
    <h2
      className={`font-hind-madurai font-semibold lg:text-[32px] text-[28px] text-${color} lg:text-left text-center mb-2`}
    >
      {children}
    </h2>
  );
}
