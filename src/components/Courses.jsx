import data from "../data.json";
import ProjectImage from "./ProjectImage";

export default function Courses() {
  return (
    <div className="flex gap-8">
      <div className="text-blue">
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
      <ProjectImage
        image={require(`../assets/certificates/certificate_web.jpeg`)}
      />
    </div>
  );
}
