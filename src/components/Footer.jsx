import location from "../assets/icons/location.png";

export default function Footer() {
  return (
    <footer className="bg-bright-orange w-full text-light-grey font-hind-madurai flex justify-center pb-4 font-thin">
      <div className="w-3/4">
        <hr className="my-6 border-light-grey mx-auto lg:my-6" />
        <div className="flex justify-between gap-10">
          <p>
            <strong className="font-semibold">2024</strong> Diana Martseniuk
          </p>
          <a
            href="https://www.google.com/maps/place/Gda%C5%84sk/@54.4288769,18.4199119,10z/data=!3m1!4b1!4m6!3m5!1s0x46fd731c14d4fa6f:0x9bb9fbf163b7be8d!8m2!3d54.3520252!4d18.6466384!16zL20vMDM1bTY?entry=ttu"
            className="flex"
          >
            <img className="h-min" src={location} alt="location icon" />
            <p>Gdańsk, Poland</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
