export interface Course {
  id: CourseID;
  name: string;
  credits: number;
  taken: boolean;
  prereqs: CourseID[],
  coreqs: CourseID[],
}

export interface CourseResult {
  recommended: boolean;
  isCoreq: boolean;
  name1: string;
  credits1: number;
  name2?: string;
  credits2?: number;
}

export type CourseID = number;

export type Courses = Course[];
