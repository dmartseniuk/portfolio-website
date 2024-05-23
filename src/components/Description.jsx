export default function Description({ children, color }) {
  return (
    <h2 className={`font-hind-madurai font-semibold text-[32px] text-${color}`}>
      {children}
    </h2>
  );
}