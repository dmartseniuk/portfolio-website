import photo from "../assets/photo.jpeg";
import Title from "./Title";
import Description from "./Description";
import Section from "./Section";

export default function Home() {
  return (
    <Section
      id="home"
      background="bg-home bg-light-grey bg-no-repeat"
      height="90vh"
    >
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
    </Section>
  );
}
