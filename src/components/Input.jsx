export default function Input({ id, label, textarea }) {
  return (
    <div className="py-2 flex flex-col gap-1">
      <label
        className="font-hind-madurai text-[16px] text-light-grey"
        htmlFor={id}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows="8"
          class="resize-none p-4 w-full text-light-grey bg-light-grey bg-opacity-[30%] rounded-3xl border-[1px] border-light-grey focus:outline-none focus:border-blue mb-4"
          maxlength="5000"
          required
        />
      ) : (
        <input
          id={id}
          type="text"
          maxlength="100"
          class="bg-light-grey bg-opacity-[30%] text-light-grey rounded-3xl border-[1px] border-light-grey focus:outline-none focus:border-blue block w-full p-4"
          required
        />
      )}
    </div>
  );
}
