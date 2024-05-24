import data from "../data.json";
import Carousel from "./Carousel";

export default function Courses() {
  return (
    <div className="flex gap-8">
      <div className="text-blue w-1/2">
        <h1 className="font-hind-madurai font-semibold text-[48px] leading-tight">
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
      <div className="w-1/2 m-auto shadow-skills outline outline-1 outline-bright-orange rounded-full justify-center bg-bright-orange bg-opacity-[10%]">
        <Carousel slides={data.courses} />
      </div>
    </div>
  );
}
