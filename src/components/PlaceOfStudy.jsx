export default function PlaceOfStudy({ subject, uni, time }) {
  return (
    <div className="text-blue lg:w-1/2 w-full">
      <h1 className="font-hind-madurai font-semibold lg:text-[48px] text-[42px] leading-tight">
        {subject}
      </h1>
      <p className="font-hind-madurai text-[28px]">{time}</p>
      <p className="font-hind-madurai text-[22px]">{uni}</p>
    </div>
  );
}
