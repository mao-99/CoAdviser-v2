export interface Course {
  id: CourseID;
  name: string;
  credits: number;
  taken: boolean;
  prereqs: CourseID[],
  coreqs: CourseID[],
}

export type CourseID = number;

export type Courses = Course[];
