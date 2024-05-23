import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Navbar() {
  const sections = ["Home", "Projects", "About"];
  return (
    <header className="bg-bright-orange sticky w-full z-20 top-0 start-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto py-2 w-3/4">
        <a href="#home" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 hover:text-light-blue"
          />
        </a>
        <div className="p-4 space-x-8 flex">
          {sections.map((section) => {
            return (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block py-2 px-3 hover:text-blue text-light-grey font-hind-madurai font-600"
              >
                {section}
              </a>
            );
          })}
        </div>
        <Button label="Connect" href="#contact" />
      </div>
    </header>
  );
}
