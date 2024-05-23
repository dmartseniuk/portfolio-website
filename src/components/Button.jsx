export default function Button({ label, href }) {
  return (
    <a
      href={href}
      className="bg-blue text-light-grey font-bold hover:bg-light-blue focus:ring-2 focus:outline-none focus:ring-light-grey rounded-3xl px-6 py-3 text-center"
    >
      {label}
    </a>
  );
}
