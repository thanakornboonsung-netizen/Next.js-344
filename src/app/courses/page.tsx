import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";
import type { Course } from "@/types/course";

const courses: Course[] = [
  {
    id: 1,
    code: "10301231",
    title: "Web Technology",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301232",
    title: "Database Systems",
    credits: 3,
    isOpen: false,
  },
  {
    id: 3,
    code: "10301233",
    title: "Software Engineering",
    credits: 3,
    isOpen: false,
  },
  {
    id: 4,
    code: "10301234",
    title: "Web Technology",
    credits: 3,
    isOpen: false,
  },
  {
    id: 5,
    code: "10301235",
    title: "English",
    credits: 3,
    isOpen: false,
  },
];

export default function CoursesPage() {
  return (
    <main>
      <SectionTitle />

      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            code={course.code}
            title={course.title}
            credits={course.credits}
            isOpen={course.isOpen}
          />
        ))}
      </section>
    </main>
  );
}