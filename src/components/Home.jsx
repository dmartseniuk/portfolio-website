import photo from "../assets/photo.jpeg";
import Title from "./Title";
import Description from "./Description";
import Section from "./Section";
import Link from "./Link";
import cv from "../assets/icons/cv.png";
import pdf from "../assets/CV.pdf";

export default function Home() {
  return (
    <Section id="home" background="home" height="90vh" flex="double">
      <img
        className="lg:w-[400px] w-[300px] self-center rounded-[20px] drop-shadow-button"
        src={photo}
        alt="personal"
      />
      <div className="flex flex-col lg:w-1/2 gap-3 md:w-3/4 w-5/6 self-center lg:mx-0 mx-6">
        <Title title="I'm Diana," color="blue" />
        <Description color="light-blue">
          a passionate and results-driven Computer Science student on the
          lookout for dynamic opportunities in the tech world
        </Description>
        <Link
          label="Download my CV"
          icon={cv}
          textSize="large"
          center
          url={pdf}
          download
        />
      </div>
    </Section>
  );
}
