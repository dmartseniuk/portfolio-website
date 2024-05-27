import data from "../data.json";

export default function Socials() {
  return (
    <div className="flex gap-10 items-center mt-10 lg:justify-start justify-center">
      {data.socials.map((network) => (
        <a href={network.url} key={network.id} target="_blank" rel="noreferrer">
          <img
            className="max-h-[40px] max-w-[40px]"
            src={require(`../assets/icons/${network.id}.png`)}
            alt={network.id}
          />
        </a>
      ))}
    </div>
  );
}
