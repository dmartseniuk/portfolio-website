import photo from "../assets/photo.jpeg";
import Title from "./Title";
import Description from "./Description";

export default function Home() {
  return (
    <section id="home">
      <div className="flex bg-home bg-light-grey bg-auto h-[90vh] justify-center">
        <div className="flex justify-center gap-20 w-3/4">
          <img
            className="w-[400px] self-center rounded-[20px] drop-shadow-button"
            src={photo}
            alt="personal"
          />
          <div className="flex flex-col w-1/2 self-center">
            <Title title="I'm Diana," color="blue" />
            <Description color="light-blue">
              a passionate and results-driven Computer Science student on the
              lookout for dynamic opportunities in the tech world
            </Description>
          </div>
        </div>
      </div>
    </section>
  );
}
