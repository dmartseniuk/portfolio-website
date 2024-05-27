import { useState } from "react";
import Button from "./Button";
import Description from "./Description";
import Input from "./Input";
import Socials from "./Socials";
import Title from "./Title";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Section from "./Section";

export default function Contact() {
  const [submitButton, setSubmitButton] = useState({
    label: "Contact Me",
    image: "",
    disabled: false,
  });
  const [response, setResponse] = useState("");

  // Prevent "Confirm Form Resubmission" dialog
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }

  function onSubmit(event) {
    const formElement = document.getElementById("sheetdb-form");
    event.preventDefault();

    setSubmitButton({
      label: "Submitting...",
      image: (
        <AiOutlineLoading3Quarters className="text-light-grey animate-spin w-5 h-5 align-text-top inline" />
      ),
      disabled: true,
    });

    const formData = new FormData(formElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbypIjgsbo0wF0xVUrbo3GV-n-Xu5W2Lfcs8S4Dp1RH7eIW-t679DLWjfO8vpgT53z7oZw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setSubmitButton({ label: "Contact Me", image: "", disabled: false });
          setResponse(
            "Form submitted successfully. Thanks! Expect a response within 24 hours."
          );
        } else {
          setSubmitButton({ label: "Contact Me", image: "", disabled: false });
          setResponse("Something went wrong. Please, try again");
        }
      })
      .catch((err) => console.log(err));

    document.getElementById("sheetdb-form").reset();
  }

  return (
    <Section
      id="contact"
      height="h-[90vh]"
      background="bg-bright-orange"
      shadow="drop-shadow-button"
      flex="flex lg:flex-row flex-col"
      center
    >
      <div className="lg:w-1/2 md:w-3/4 w-5/6">
        <Title title="Get in touch" color="light-grey" />
        <Description color="light-grey">
          I'm ready to learn, collaborate, and make a meaningful impact. Let's
          embark on this adventure together!
        </Description>
        <Socials />
      </div>
      <div className="lg:w-1/2 md:w-3/4 w-5/6">
        <form
          onSubmit={(e) => onSubmit(e)}
          action="https://script.google.com/macros/s/AKfycbypIjgsbo0wF0xVUrbo3GV-n-Xu5W2Lfcs8S4Dp1RH7eIW-t679DLWjfO8vpgT53z7oZw/exec"
          method="post"
          className="flex flex-col max-w-[380px] min-w-[200px] m-auto"
          id="sheetdb-form"
          name="contact-form"
        >
          <Input id="name" label="Your Name*" />
          <Input id="email" label="Your E-mail Adress*" />
          <Input id="message" label="Your Message*" textarea />
          <div
            id="result"
            className="text-sm font-hind-madurai text-light-grey mb-2"
          >
            {response}
          </div>
          <Button
            submit
            label={submitButton.label}
            disabled={submitButton.disabled}
          >
            {submitButton.image}
          </Button>
        </form>
      </div>
    </Section>
  );
}
