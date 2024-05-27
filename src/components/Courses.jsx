import data from "../data.json";
import Carousel from "./Carousel";

export default function Courses() {
  return (
    <div className="flex gap-8 lg:flex-row flex-col">
      <div className="text-blue lg:w-1/2 md:w-3/4 w-5/6 self-center">
        <h1 className="font-hind-madurai font-semibold lg:text-[48px] text-[42px] leading-tight">
          Udemy Courses
        </h1>
        <ul className="list-disc list-inside">
          {data.courses.map((course) => (
            <li key={course.id} className="font-hind-madurai text-[22px]">
              <strong>{course.name}</strong> – {course.skills}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 md:w-3/4 w-5/6 m-auto shadow-skills outline outline-1 outline-bright-orange rounded-full justify-center content-center bg-bright-orange bg-opacity-[10%]">
        <Carousel slides={data.courses} />
      </div>
    </div>
  );
}
