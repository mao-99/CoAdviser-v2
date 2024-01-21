import type { Course, CourseID, Courses } from "./types";
import { coursesArray, getCourse } from "./courses";

let can_take: string[]  = [];
let taken_courses: CourseID[] = [];

export function handleClick(course: Course) {
  taken_courses = [...taken_courses, course.id];
  console.log(taken_courses);

  function checkPrereqs(course: Course) { // depth first search
    if(course.prereqs.length === 0) return;

    course.taken = true;
    console.log(course)

    for(let i = 0; i < course.prereqs.length; i++) {
      const prereq_course = getCourse(course.prereqs[i]);

      if(prereq_course && !prereq_course.taken) {
        handleClick(prereq_course);
      }
    }
  }

  function uncheckSubseqs(course: Course) {
    for(let i = 0; i < coursesArray.length ; i++) {
      if(coursesArray[i].prereqs.includes(course.id)) {
        coursesArray[i].taken = false;
        uncheckSubseqs(coursesArray[i]);
      }
    }
  }
  if(course.taken) {
    course.taken = false;
    uncheckSubseqs(course);
  }
  else checkPrereqs(course);
}