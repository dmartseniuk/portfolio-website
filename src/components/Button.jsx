export default function Button({ label, href }) {
  return (
    <a
      href={href}
      class="bg-blue text-light-gray font-bold hover:bg-light-blue focus:ring-2 focus:outline-none focus:ring-light-gray rounded-3xl px-6 py-3 text-center"
    >
      {label}
    </a>
  );
}
