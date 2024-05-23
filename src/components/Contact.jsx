import Button from "./Button";
import Description from "./Description";
import Input from "./Input";
import Socials from "./Socials";
import Title from "./Title";

export default function Contact() {
  return (
    <section id="contact">
      <div className="flex bg-home bg-bright-orange h-[80vh] justify-center drop-shadow-button">
        <div className="flex justify-center items-center gap-20 w-3/4">
          <div className="w-1/2">
            <Title title="Get in touch" color="light-grey" />
            <Description color="light-grey">
              I'm ready to learn, collaborate, and make a meaningful impact.
              Let's embark on this adventure together!
            </Description>
            <Socials />
          </div>
          <div className="w-1/2">
            <form
              action=""
              method="post"
              className="flex flex-col max-w-[380px] min-w-[200px]"
            >
              <Input id="name" label="Your Name*" />
              <Input id="email" label="Your E-mail Adress*" />
              <Input id="message" label="Your Message*" textarea />
              <Button label="Contact Me" href="" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
