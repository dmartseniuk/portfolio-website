export default function Button({ label, href, submit, children, disabled }) {
  return submit ? (
    <button
      className="bg-blue text-light-grey font-bold hover:bg-light-blue focus:ring-2 focus:outline-none focus:ring-light-grey rounded-3xl px-6 py-3 text-center flex gap-2 justify-center disabled:bg-light-blue"
      type="submit"
      id="submit-button"
      value="Submit"
      disabled={disabled}
    >
      {children}
      {label}
    </button>
  ) : (
    <a
      href={href}
      className="bg-blue text-light-grey font-bold hover:bg-light-blue focus:ring-2 focus:outline-none focus:ring-light-grey rounded-3xl px-6 py-3 text-center"
    >
      {label}
    </a>
  );
}
